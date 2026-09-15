const DB_NAME = 'PortfolioDB';
const STORE_NAME = 'images';
const DB_VERSION = 1;

// 初始化 IndexedDB 数据库
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

// 保存图片 DataURL 到 IndexedDB (支持无限容量)
export async function saveImageToDB(key, base64Data) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(base64Data, key);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('Error saving image to IndexedDB:', err);
    return false;
  }
}

// 从 IndexedDB 读取图片
export async function getImageFromDB(key) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('Error getting image from IndexedDB:', err);
    return null;
  }
}

// 导出删除图片方法
export async function deleteImageFromDB(key) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('Error deleting image from IndexedDB:', err);
    return false;
  }
}

// 剥离 Base64 大图，确保 LocalStorage 只存轻量纯文本
function stripBase64Images(contentObj) {
  if (!contentObj) return contentObj;
  const cloned = JSON.parse(JSON.stringify(contentObj));

  ['zh', 'en'].forEach((lang) => {
    if (cloned[lang] && cloned[lang].projects && cloned[lang].projects.items) {
      cloned[lang].projects.items = cloned[lang].projects.items.map((item) => {
        // 如果项目里的 image 是 Base64 字符串，将其清空，避免占用 LocalStorage 空间
        if (item.image && item.image.startsWith('data:image')) {
          return { ...item, image: '' };
        }
        return item;
      });
    }
  });

  return cloned;
}

// LocalStorage 保持纯文字数据
export function getContentFromStorage() {
  try {
    const data = localStorage.getItem('portfolio_content');
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Error getting content from LocalStorage:', err);
    return null;
  }
}

export function saveContentToStorage(content) {
  try {
    const cleanContent = stripBase64Images(content);
    localStorage.setItem('portfolio_content', JSON.stringify(cleanContent));
    return true;
  } catch (err) {
    console.error('Error saving content to LocalStorage:', err);
    return false;
  }
}
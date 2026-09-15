import React, { useState } from 'react';
import { User, Sparkles, RotateCcw, Save, Upload, Trash2, Camera } from 'lucide-react';
import { saveImageToDB, deleteImageFromDB } from '../../../utils/db';

export default function PersonalEditor({
  data,
  onChange,
  editLang,
  onSave,
  onReset
}) {
  const langData = data[editLang] || {};
  const hero = langData.hero || {};
  const stats = hero.stats || [];

  const [uploading, setUploading] = useState(false);

  const handleHeroChange = (field, value) => {
    onChange({
      ...data,
      [editLang]: {
        ...langData,
        hero: {
          ...hero,
          [field]: value
        }
      }
    });
  };

  const handleStatChange = (index, field, value) => {
    const updatedStats = [...stats];
    updatedStats[index] = {
      ...updatedStats[index],
      [field]: value
    };
    handleHeroChange('stats', updatedStats);
  };

  // 同样取消 reload，实现静默同步
  const handleAvatarUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const base64Data = event.target.result;
        await saveImageToDB('profile_avatar', base64Data);
        alert(editLang === 'zh' ? '头像保存成功！' : 'Avatar updated!');
      } catch (err) {
        console.error("Save image failed", err);
      } finally {
        setUploading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = async () => {
    if (confirm(editLang === 'zh' ? '确定要移除个人照片吗？' : 'Remove profile image?')) {
      try {
        await deleteImageFromDB('profile_avatar');
        alert(editLang === 'zh' ? '头像已移除' : 'Avatar removed');
      } catch (err) {
        console.error("Delete image failed", err);
      }
    }
  };

  return (
    <div className="space-y-6 font-sans text-[#111111] bg-[#FBFBFA] p-1 rounded-lg">
      <div className="flex items-center justify-between p-3 bg-white border border-[#E5E5E0] rounded-md text-xs">
        <span className="text-[#666666]">
          Editing Language: <strong className="text-[#1E40AF] uppercase font-mono">{editLang === 'zh' ? '中文 (ZH)' : 'English (EN)'}</strong>
        </span>
      </div>

      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono text-[#111111]">
          <Camera size={14} className="text-[#1E40AF]" />
          <span>PROFILE PHOTO / 个人形象照</span>
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex-1 cursor-pointer inline-flex items-center justify-center px-4 py-2.5 bg-[#FBFBFA] hover:bg-slate-100 border border-dashed border-[#1E40AF] rounded text-xs font-mono text-[#1E40AF] font-bold">
            <Upload size={14} className="mr-2" />
            {uploading ? '上传中...' : '上传/替换照片'}
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={handleRemoveAvatar}
            className="p-2.5 text-[#666666] hover:text-red-600 border border-[#E5E5E0] rounded bg-white"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </section>

      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono text-[#111111]">
          <User size={14} className="text-[#1E40AF]" />
          <span>BASIC IDENTITY</span>
        </div>

        <div>
          <label className="block text-xs text-[#666666] mb-1">姓名 / Full Name</label>
          <input
            type="text"
            value={hero.name || ''}
            onChange={(e) => handleHeroChange('name', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded"
          />
        </div>

        <div>
          <label className="block text-xs text-[#666666] mb-1">专业定位 / Title</label>
          <input
            type="text"
            value={hero.title || ''}
            onChange={(e) => handleHeroChange('title', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded"
          />
        </div>
      </section>

      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono text-[#111111]">
          <Sparkles size={14} className="text-[#1E40AF]" />
          <span>HERO STATEMENT</span>
        </div>

        <div>
          <label className="block text-xs text-[#666666] mb-1">职业宣言</label>
          <textarea
            rows={3}
            value={hero.bio || ''}
            onChange={(e) => handleHeroChange('bio', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded"
          />
        </div>
      </section>

      <div className="pt-2 flex items-center justify-between">
        <button type="button" onClick={onReset} className="px-3 py-2 rounded border border-[#E5E5E0] bg-white text-xs text-[#666666]">重置</button>
        <button type="button" onClick={onSave} className="px-5 py-2 rounded bg-[#1E40AF] text-white text-xs font-bold">保存修改</button>
      </div>
    </div>
  );
}
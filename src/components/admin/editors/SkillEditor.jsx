import React from 'react';
import { Layers, Plus, Trash2, CheckCircle, RotateCcw, Save } from 'lucide-react';

export default function SkillEditor({
  data,
  onChange,
  editLang,
  onSave,
  onReset
}) {
  const langData = data[editLang] || {};
  const skills = langData.skills || { categories: [] };
  const categories = skills.categories || [];

  // 通用更新函数（保持 zh 和 en 独立保存）
  const updateSkillsField = (field, value) => {
    onChange({
      ...data,
      [editLang]: {
        ...langData,
        skills: {
          ...skills,
          [field]: value
        }
      }
    });
  };

  // 修改单个分类卡片的属性
  const handleCategoryChange = (catIndex, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[catIndex] = {
      ...updatedCategories[catIndex],
      [field]: value
    };
    updateSkillsField('categories', updatedCategories);
  };

  // 修改分类下的具体 Skill 项
  const handleSkillItemChange = (catIndex, skillIndex, field, value) => {
    const updatedCategories = [...categories];
    const updatedList = [...(updatedCategories[catIndex].list || [])];
    
    // 支持字符串数组或对象数组的数据结构兼容
    if (typeof updatedList[skillIndex] === 'string') {
      updatedList[skillIndex] = value;
    } else {
      updatedList[skillIndex] = {
        ...updatedList[skillIndex],
        [field]: value
      };
    }

    updatedCategories[catIndex] = {
      ...updatedCategories[catIndex],
      list: updatedList
    };
    updateSkillsField('categories', updatedCategories);
  };

  // 为分类新增一项技能
  const handleAddSkillItem = (catIndex) => {
    const updatedCategories = [...categories];
    const currentList = updatedCategories[catIndex].list || [];
    const newItem = typeof currentList[0] === 'object' 
      ? { name: editLang === 'zh' ? '新能力点' : 'New Capability', desc: '' }
      : (editLang === 'zh' ? '新核心能力' : 'New Capability Item');

    updatedCategories[catIndex] = {
      ...updatedCategories[catIndex],
      list: [...currentList, newItem]
    };
    updateSkillsField('categories', updatedCategories);
  };

  // 删除分类下的某项技能
  const handleDeleteSkillItem = (catIndex, skillIndex) => {
    const updatedCategories = [...categories];
    const updatedList = (updatedCategories[catIndex].list || []).filter((_, i) => i !== skillIndex);
    updatedCategories[catIndex] = {
      ...updatedCategories[catIndex],
      list: updatedList
    };
    updateSkillsField('categories', updatedCategories);
  };

  // 新增一个能力大类
  const handleAddCategory = () => {
    const newCat = {
      id: `cat-${Date.now()}`,
      title: editLang === 'zh' ? '新能力板块' : 'New Capability Domain',
      list: [editLang === 'zh' ? '示例能力 01' : 'Sample Capability 01']
    };
    updateSkillsField('categories', [...categories, newCat]);
  };

  // 删除一个能力大类
  const handleDeleteCategory = (catIndex) => {
    const updatedCategories = categories.filter((_, i) => i !== catIndex);
    updateSkillsField('categories', updatedCategories);
  };

  return (
    <div className="space-y-8 font-sans text-[#111111] bg-[#FBFBFA] p-1 rounded-lg">
      
      {/* 顶部语种指示 */}
      <div className="flex items-center justify-between p-3 bg-white border border-[#E5E5E0] rounded-md text-xs">
        <span className="text-[#666666]">
          Editing Language: <strong className="text-[#1E40AF] uppercase font-mono">{editLang === 'zh' ? '中文 (ZH)' : 'English (EN)'}</strong>
        </span>
        <span className="text-[11px] font-mono text-[#666666]">
          Capabilities Matrix · 独立维护
        </span>
      </div>

      {/* 模块基础配置 */}
      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono tracking-wider text-[#111111]">
          <Layers size={14} className="text-[#1E40AF]" />
          <span>CAPABILITIES SECTION CONFIG</span>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#666666] mb-1">
            {editLang === 'zh' ? '模块标题' : 'Section Title'}
          </label>
          <input
            type="text"
            value={skills.title || ''}
            onChange={(e) => updateSkillsField('title', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
          />
        </div>
      </section>

      {/* 能力大类列表 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <label className="text-xs font-bold font-mono text-[#111111] uppercase tracking-wider">
            CAPABILITY DOMAINS ({categories.length})
          </label>
          <button
            type="button"
            onClick={handleAddCategory}
            className="inline-flex items-center text-xs text-[#1E40AF] hover:text-blue-800 font-bold"
          >
            <Plus size={14} className="mr-1" />
            {editLang === 'zh' ? '新增能力板块' : 'Add Domain'}
          </button>
        </div>

        {categories.map((cat, cIdx) => (
          <div key={cIdx} className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
            
            {/* 分类卡片 Header */}
            <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono font-bold text-xs text-[#1E40AF]">
                  0{cIdx + 1}/
                </span>
                <span className="font-bold text-sm text-[#111111]">
                  {cat.title || 'Category Title'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteCategory(cIdx)}
                className="p-1 text-[#666666] hover:text-red-600 transition-colors"
                title="Delete Category"
              >
                <Trash2 size={15} />
              </button>
            </div>

            {/* 分类名称修改 */}
            <div>
              <label className="block text-[10px] font-mono text-[#666666] mb-1">
                DOMAIN TITLE / 能力板块名称
              </label>
              <input
                type="text"
                value={cat.title || ''}
                onChange={(e) => handleCategoryChange(cIdx, 'title', e.target.value)}
                className="w-full px-3 py-2 text-xs font-bold bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
              />
            </div>

            {/* 具体的 Skill Items */}
            <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-mono text-[#666666] uppercase">
                  SKILL / COMPETENCY ITEMS
                </label>
                <button
                  type="button"
                  onClick={() => handleAddSkillItem(cIdx)}
                  className="text-[10px] text-[#1E40AF] hover:underline font-bold"
                >
                  + Add Item
                </button>
              </div>

              <div className="space-y-2">
                {(cat.list || []).map((sk, sIdx) => {
                  const isObj = typeof sk === 'object' && sk !== null;
                  const valName = isObj ? sk.name : sk;

                  return (
                    <div key={sIdx} className="flex items-center space-x-2">
                      <CheckCircle size={13} className="text-[#1E40AF] shrink-0" />
                      <input
                        type="text"
                        value={valName || ''}
                        onChange={(e) => handleSkillItemChange(cIdx, sIdx, 'name', e.target.value)}
                        className="flex-1 px-2.5 py-1 text-xs bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                        placeholder="Capability item..."
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteSkillItem(cIdx, sIdx)}
                        className="p-1 text-[#666666] hover:text-red-600"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 底部保存与重置 */}
      <div className="pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center px-3 py-2 rounded border border-[#E5E5E0] bg-white text-xs text-[#666666] hover:text-[#111111] hover:bg-[#FBFBFA] transition-colors"
        >
          <RotateCcw size={13} className="mr-1.5" />
          Reset Capabilities Defaults
        </button>

        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center px-5 py-2 rounded bg-[#1E40AF] text-white text-xs font-bold hover:bg-blue-800 transition-colors shadow-sm"
        >
          <Save size={13} className="mr-1.5" />
          Save Changes
        </button>
      </div>

    </div>
  );
}
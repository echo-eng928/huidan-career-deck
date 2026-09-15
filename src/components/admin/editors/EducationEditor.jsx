import React from 'react';
import { GraduationCap, Plus, Trash2, RotateCcw, Save } from 'lucide-react';

export default function EducationEditor({
  data,
  onChange,
  editLang,
  onSave,
  onReset
}) {
  const langData = data[editLang] || {};
  const education = langData.education || { items: [] };
  const items = education.items || [];

  const updateEducationField = (field, value) => {
    onChange({
      ...data,
      [editLang]: {
        ...langData,
        education: {
          ...education,
          [field]: value
        }
      }
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    updateEducationField('items', updatedItems);
  };

  const handleAddEducationItem = () => {
    const newItem = {
      id: `edu-${Date.now()}`,
      school: editLang === 'zh' ? '大学名称' : 'University Name',
      degree: editLang === 'zh' ? '学士 / 硕士学位' : 'Degree / Major',
      year: '2020 – 2024'
    };
    updateEducationField('items', [...items, newItem]);
  };

  const handleDeleteEducationItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    updateEducationField('items', updatedItems);
  };

  return (
    <div className="space-y-8 font-sans text-[#111111] bg-[#FBFBFA] p-1 rounded-lg">
      
      {/* 顶部语种指示 */}
      <div className="flex items-center justify-between p-3 bg-white border border-[#E5E5E0] rounded-md text-xs">
        <span className="text-[#666666]">
          {editLang === 'zh' ? '当前编辑语种：' : 'Editing Language: '}
          <strong className="text-[#1E40AF] uppercase font-mono">
            {editLang === 'zh' ? '中文 (ZH)' : 'English (EN)'}
          </strong>
        </span>
        <span className="text-[11px] font-mono text-[#666666]">
          {editLang === 'zh' ? '教育背景 · 独立维护' : 'Education Background · Pure EN'}
        </span>
      </div>

      {/* 模块配置 */}
      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono tracking-wider text-[#111111]">
          <GraduationCap size={14} className="text-[#1E40AF]" />
          <span>EDUCATION SECTION CONFIG</span>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#666666] mb-1">
            {editLang === 'zh' ? '模块标题' : 'Section Title'}
          </label>
          <input
            type="text"
            value={education.title || ''}
            onChange={(e) => updateEducationField('title', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
          />
        </div>
      </section>

      {/* 教育背景列表 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <label className="text-xs font-bold font-mono text-[#111111] uppercase tracking-wider">
            ACADEMIC DEGREES ({items.length})
          </label>
          <button
            type="button"
            onClick={handleAddEducationItem}
            className="inline-flex items-center text-xs text-[#1E40AF] hover:text-blue-800 font-bold"
          >
            <Plus size={14} className="mr-1" />
            {editLang === 'zh' ? '新增教育经历' : 'Add Degree'}
          </button>
        </div>

        {items.map((item, idx) => (
          <div key={item.id || idx} className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
            
            {/* 顶栏 */}
            <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono font-bold text-xs text-[#1E40AF]">
                  0{idx + 1}/
                </span>
                <span className="font-bold text-sm text-[#111111]">
                  {item.school || 'University'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteEducationItem(idx)}
                className="p-1 text-[#666666] hover:text-red-600 transition-colors"
                title="Delete Item"
              >
                <Trash2 size={15} />
              </button>
            </div>

            {/* 时间 / 院校 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-1">
                <label className="block text-[10px] font-mono text-[#666666] mb-1">
                  {editLang === 'zh' ? 'YEAR / 时间范围' : 'YEAR'}
                </label>
                <input
                  type="text"
                  value={item.year || ''}
                  onChange={(e) => handleItemChange(idx, 'year', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs font-mono font-bold bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                  placeholder="e.g. 2020 – 2024"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-mono text-[#666666] mb-1">
                  {editLang === 'zh' ? 'INSTITUTION / 院校名称' : 'INSTITUTION'}
                </label>
                <input
                  type="text"
                  value={item.school || ''}
                  onChange={(e) => handleItemChange(idx, 'school', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs font-bold bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                />
              </div>
            </div>

            {/* 学位与专业 */}
            <div>
              <label className="block text-[10px] font-mono text-[#666666] mb-1">
                {editLang === 'zh' ? 'DEGREE & MAJOR / 学位与专业' : 'DEGREE & MAJOR'}
              </label>
              <input
                type="text"
                value={item.degree || ''}
                onChange={(e) => handleItemChange(idx, 'degree', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
              />
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
          {editLang === 'zh' ? '恢复默认' : 'Reset Education Defaults'}
        </button>

        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center px-5 py-2 rounded bg-[#1E40AF] text-white text-xs font-bold hover:bg-blue-800 transition-colors shadow-sm"
        >
          <Save size={13} className="mr-1.5" />
          {editLang === 'zh' ? '保存修改' : 'Save Changes'}
        </button>
      </div>

    </div>
  );
}
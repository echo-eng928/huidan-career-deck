import React from 'react';
import { Briefcase, Plus, Trash2, Star, CheckCircle2, RotateCcw, Save } from 'lucide-react';

export default function CareerEditor({
  data,
  onChange,
  editLang,
  onSave,
  onReset
}) {
  const langData = data[editLang] || {};
  const career = langData.career || { items: [] };
  const items = career.items || [];

  const updateCareerField = (field, value) => {
    onChange({
      ...data,
      [editLang]: {
        ...langData,
        career: {
          ...career,
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
    updateCareerField('items', updatedItems);
  };

  const handlePointChange = (itemIndex, pointIndex, value) => {
    const updatedItems = [...items];
    const updatedPoints = [...(updatedItems[itemIndex].points || [])];
    updatedPoints[pointIndex] = value;
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      points: updatedPoints
    };
    updateCareerField('items', updatedItems);
  };

  const handleAddPoint = (itemIndex) => {
    const updatedItems = [...items];
    const updatedPoints = [...(updatedItems[itemIndex].points || []), ''];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      points: updatedPoints
    };
    updateCareerField('items', updatedItems);
  };

  const handleDeletePoint = (itemIndex, pointIndex) => {
    const updatedItems = [...items];
    const updatedPoints = (updatedItems[itemIndex].points || []).filter((_, i) => i !== pointIndex);
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      points: updatedPoints
    };
    updateCareerField('items', updatedItems);
  };

  const handleAddCareerItem = () => {
    const newItem = {
      id: `career-${Date.now()}`,
      year: '2026',
      company: editLang === 'zh' ? '新公司名称' : 'New Company',
      role: editLang === 'zh' ? '职位名称' : 'Role / Position',
      highlight: false,
      insight: editLang === 'zh' ? '核心业务观察...' : 'Key business insight...',
      points: [editLang === 'zh' ? '核心工作成果 1' : 'Key achievement 1']
    };
    updateCareerField('items', [newItem, ...items]);
  };

  const handleDeleteCareerItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    updateCareerField('items', updatedItems);
  };

  return (
    <div className="space-y-8 font-sans text-[#111111] bg-[#FBFBFA] p-1 rounded-lg">
      
      {/* 顶部语种指示 */}
      <div className="flex items-center justify-between p-3 bg-white border border-[#E5E5E0] rounded-md text-xs">
        <span className="text-[#666666]">
          Editing Language: <strong className="text-[#1E40AF] uppercase font-mono">{editLang === 'zh' ? '中文 (ZH)' : 'English (EN)'}</strong>
        </span>
        <span className="text-[11px] font-mono text-[#666666]">
          Career Timeline · 独立维护
        </span>
      </div>

      {/* 模块配置 */}
      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono tracking-wider text-[#111111]">
          <div className="flex items-center space-x-2">
            <Briefcase size={14} className="text-[#1E40AF]" />
            <span>CAREER SECTION CONFIG</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-[#666666] mb-1">
              {editLang === 'zh' ? '模块标题' : 'Section Title'}
            </label>
            <input
              type="text"
              value={career.title || ''}
              onChange={(e) => updateCareerField('title', e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#666666] mb-1">
              {editLang === 'zh' ? '重点经历标签文字' : 'Highlight Tag Label'}
            </label>
            <input
              type="text"
              value={career.highlightNotice || ''}
              onChange={(e) => updateCareerField('highlightNotice', e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
            />
          </div>
        </div>
      </section>

      {/* 经历列表 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <label className="text-xs font-bold font-mono text-[#111111] uppercase tracking-wider">
            CAREER EXPERIENCES ({items.length})
          </label>
          <button
            type="button"
            onClick={handleAddCareerItem}
            className="inline-flex items-center text-xs text-[#1E40AF] hover:text-blue-800 font-bold"
          >
            <Plus size={14} className="mr-1" />
            {editLang === 'zh' ? '新增职业经历' : 'Add Career Item'}
          </button>
        </div>

        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className={`bg-white p-5 border rounded-md space-y-4 shadow-sm transition-all ${
              item.highlight ? 'border-[#1E40AF] ring-1 ring-blue-100' : 'border-[#E5E5E0]'
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono font-bold text-xs text-[#1E40AF]">
                  #{idx + 1}
                </span>
                <span className="font-bold text-sm text-[#111111]">
                  {item.company || 'Company'}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => handleItemChange(idx, 'highlight', !item.highlight)}
                  className={`inline-flex items-center px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                    item.highlight
                      ? 'bg-amber-50 text-amber-700 border border-amber-200 font-semibold'
                      : 'bg-[#FBFBFA] text-[#666666] border border-[#E5E5E0] hover:text-[#111111]'
                  }`}
                >
                  <Star size={12} className={`mr-1 ${item.highlight ? 'fill-amber-500 text-amber-500' : ''}`} />
                  {item.highlight ? 'Highlighted Phase' : 'Mark as Key Phase'}
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteCareerItem(idx)}
                  className="p-1 text-[#666666] hover:text-red-600 transition-colors"
                  title="Delete Item"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] font-mono text-[#666666] mb-1">
                  YEAR / 时间范围
                </label>
                <input
                  type="text"
                  value={item.year || ''}
                  onChange={(e) => handleItemChange(idx, 'year', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs font-mono font-bold bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                  placeholder="e.g. 2022–2024"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[#666666] mb-1">
                  COMPANY / 公司名称
                </label>
                <input
                  type="text"
                  value={item.company || ''}
                  onChange={(e) => handleItemChange(idx, 'company', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs font-bold bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[#666666] mb-1">
                  ROLE / 职位名称
                </label>
                <input
                  type="text"
                  value={item.role || ''}
                  onChange={(e) => handleItemChange(idx, 'role', e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-[#1E40AF] font-bold mb-1">
                EDITORIAL ONE-LINER INSIGHT / 业务深刻观察
              </label>
              <textarea
                rows={2}
                value={item.insight || ''}
                onChange={(e) => handleItemChange(idx, 'insight', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs italic bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF] leading-relaxed"
                placeholder="Where I learned that operations is mostly about..."
              />
            </div>

            <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-mono text-[#666666] uppercase">
                  KEY DELIVERABLES & IMPACT / 核心成果点
                </label>
                <button
                  type="button"
                  onClick={() => handleAddPoint(idx)}
                  className="text-[10px] text-[#1E40AF] hover:underline font-bold"
                >
                  + Add Point
                </button>
              </div>

              <div className="space-y-2">
                {(item.points || []).map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center space-x-2">
                    <CheckCircle2 size={13} className="text-[#1E40AF] shrink-0" />
                    <input
                      type="text"
                      value={pt || ''}
                      onChange={(e) => handlePointChange(idx, pIdx, e.target.value)}
                      className="flex-1 px-2.5 py-1 text-xs bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
                      placeholder="Point detail..."
                    />
                    <button
                      type="button"
                      onClick={() => handleDeletePoint(idx, pIdx)}
                      className="p-1 text-[#666666] hover:text-red-600"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 底部保存 */}
      <div className="pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center px-3 py-2 rounded border border-[#E5E5E0] bg-white text-xs text-[#666666] hover:text-[#111111] hover:bg-[#FBFBFA] transition-colors"
        >
          <RotateCcw size={13} className="mr-1.5" />
          Reset Career Defaults
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
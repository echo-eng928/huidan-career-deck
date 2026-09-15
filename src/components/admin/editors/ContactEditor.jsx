import React from 'react';
import { Mail, MessageCircle, MessageSquare, RotateCcw, Save } from 'lucide-react';

export default function ContactEditor({
  data,
  onChange,
  editLang,
  onSave,
  onReset
}) {
  const langData = data[editLang] || {};
  const contact = langData.contact || {};

  const handleContactChange = (field, value) => {
    onChange({
      ...data,
      [editLang]: {
        ...langData,
        contact: {
          ...contact,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-6 font-sans text-[#111111] bg-[#FBFBFA] p-1 rounded-lg">
      
      {/* 顶部语种指示 */}
      <div className="flex items-center justify-between p-3 bg-white border border-[#E5E5E0] rounded-md text-xs">
        <span className="text-[#666666]">
          Editing Language: <strong className="text-[#1E40AF] uppercase font-mono">{editLang === 'zh' ? '中文 (ZH)' : 'English (EN)'}</strong>
        </span>
        <span className="text-[11px] font-mono text-[#666666]">
          Contact Details · 独立维护
        </span>
      </div>

      {/* 联系方式表单 */}
      <section className="bg-white p-5 border border-[#E5E5E0] rounded-md space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E0] pb-2 text-xs font-bold font-mono tracking-wider text-[#111111]">
          <Mail size={14} className="text-[#1E40AF]" />
          <span>CONTACT INFORMATION</span>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#666666] mb-1">
            {editLang === 'zh' ? '电子邮箱 / Email Address' : 'Email Address'}
          </label>
          <input
            type="email"
            value={contact.email || ''}
            onChange={(e) => handleContactChange('email', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF] font-mono"
            placeholder="yourname@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#666666] mb-1">
            {editLang === 'zh' ? '微信号 / 电话描述 (复制内容)' : 'WeChat / Phone (Copy Content)'}
          </label>
          <input
            type="text"
            value={contact.wechat || ''}
            onChange={(e) => handleContactChange('wechat', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF]"
            placeholder="微信号: xxx / 电话: 138xxx"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#666666] mb-1">
            {editLang === 'zh' ? '联系说明文案' : 'Contact Note'}
          </label>
          <textarea
            rows={3}
            value={contact.note || ''}
            onChange={(e) => handleContactChange('note', e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#FBFBFA] border border-[#E5E5E0] rounded focus:outline-none focus:border-[#1E40AF] leading-relaxed"
          />
        </div>
      </section>

      {/* 保存与重置 */}
      <div className="pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center px-3 py-2 rounded border border-[#E5E5E0] bg-white text-xs text-[#666666] hover:text-[#111111]"
        >
          <RotateCcw size={13} className="mr-1.5" />
          {editLang === 'zh' ? '恢复默认' : 'Reset Defaults'}
        </button>

        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center px-5 py-2 rounded bg-[#1E40AF] text-white text-xs font-bold hover:bg-blue-800"
        >
          <Save size={13} className="mr-1.5" />
          {editLang === 'zh' ? '保存修改' : 'Save Changes'}
        </button>
      </div>

    </div>
  );
}
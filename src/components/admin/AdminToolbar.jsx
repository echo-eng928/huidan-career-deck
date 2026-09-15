import React from 'react';
import { Save, RotateCcw, Download, X, Edit3 } from 'lucide-react';

export default function AdminToolbar({
  onSave,
  onReset,
  onExport,
  onClose,
  hasUnsavedChanges
}) {
  return (
    <div className="sticky top-0 z-[100] bg-slate-900 text-white border-b border-amber-500/40 px-4 py-2.5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
        
        {/* 左侧提示状态 */}
        <div className="flex items-center space-x-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="font-bold tracking-wide text-amber-400 flex items-center gap-1.5">
            <Edit3 size={15} /> EDIT MODE ACTIVE
          </span>
          {hasUnsavedChanges && (
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-mono">
              Unsaved Changes
            </span>
          )}
        </div>

        {/* 右侧操作按钮组 */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={onReset}
            className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
            title="恢复为 content.js 的初始默认数据"
          >
            <RotateCcw size={13} className="mr-1.5" /> Reset Default
          </button>

          <button
            onClick={onExport}
            className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800 text-blue-300 hover:bg-slate-700 hover:text-blue-200 transition-colors border border-slate-700"
            title="下载成 content.js 文件，便于保存提交到 GitHub"
          >
            <Download size={13} className="mr-1.5" /> Export content.js
          </button>

          <button
            onClick={onSave}
            className="inline-flex items-center px-4 py-1.5 rounded-md text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm"
          >
            <Save size={13} className="mr-1.5" /> Save Changes
          </button>

          <div className="h-4 w-[1px] bg-slate-700 mx-1" />

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Exit Edit Mode"
          >
            <X size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
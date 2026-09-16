import React, { useState } from 'react';

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');

    try {
      // 组装邮件主题和正文
      const subject = encodeURIComponent('【网站访客留言】来自个人职业档案');
      const body = encodeURIComponent(
        `访客留言内容：\n${message}\n\n联系方式：${contact || '未填写'}`
      );

      // 直接唤起用户的邮件客户端发送到你的邮箱
      window.location.href = `mailto:echoa981@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        setStatus('');
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* 右下角悬浮反馈按钮（完美适配手机与电脑） */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 text-sm font-medium focus:outline-none"
        aria-label="有什么话想对我说"
      >
        <span className="text-base">💬</span>
        <span>有什么话想对我说？</span>
      </button>

      {/* 弹窗遮罩层 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white dark:bg-neutral-900 w-full max-w-md rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 relative">
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              有什么话想对我说？
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              感谢访问我的职业档案！无论是意见建议、合作邀约还是单纯打招呼，都欢迎随时留言。
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  你的留言内容 *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="写下你的想法、建议或反馈..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  联系方式（可选，留下邮箱或微信方便我回复）
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="例如: email@example.com 或 微信"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? '准备中...' : '提交反馈'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-xs text-green-600 dark:text-green-400 text-center mt-2">
                  ✨ 正在为您调起邮件客户端发送反馈...
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
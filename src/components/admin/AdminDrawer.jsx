import React from 'react';
import { X, Save, RotateCcw } from 'lucide-react';

export default function AdminDrawer({
  isOpen,
  onClose,
  editLang,
  setEditLang,
  activeTab,
  setActiveTab,
  draftContent,
  setDraftContent,
  onSave,
  onReset
}) {
  if (!isOpen) return null;

  const lang = editLang || 'zh';
  const content = draftContent[lang] || {};

  // 1. Hero / Stats 更新
  const updateHero = (field, value) => {
    setDraftContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        hero: {
          ...prev[lang]?.hero,
          [field]: value
        }
      }
    }));
  };

  const updateStat = (index, field, value) => {
    const newStats = [...(content.hero?.stats || [])];
    if (!newStats[index]) newStats[index] = {};
    newStats[index][field] = value;
    updateHero('stats', newStats);
  };

  // 2. Career 职业轨迹全字段更新
  const updateCareer = (index, field, value) => {
    const newItems = [...(content.career?.items || [])];
    if (!newItems[index]) newItems[index] = {};
    newItems[index][field] = value;

    setDraftContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        career: {
          ...prev[lang]?.career,
          items: newItems
        }
      }
    }));
  };

  const updateCareerHighlights = (index, textValue) => {
    const arr = textValue.split('\n').map(item => item.trim()).filter(Boolean);
    updateCareer(index, 'highlights', arr);
  };

  const updateCareerCapabilities = (index, textValue) => {
    const arr = textValue.split('\n').map(item => item.trim()).filter(Boolean);
    updateCareer(index, 'capabilitiesFormed', arr);
  };

  // 3. Projects 案例更新
  const updateProject = (index, field, value) => {
    const newItems = [...(content.projects?.items || [])];
    if (!newItems[index]) newItems[index] = {};
    newItems[index][field] = value;

    setDraftContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        projects: {
          ...prev[lang]?.projects,
          items: newItems
        }
      }
    }));
  };

  const updateProjectOutcome = (caseIndex, outcomeString) => {
    const outcomesArray = outcomeString.split('\n').map((item) => item.trim()).filter(Boolean);
    const newItems = [...(content.projects?.items || [])];
    if (!newItems[caseIndex]) newItems[caseIndex] = {};
    newItems[caseIndex].outcome = outcomesArray;

    setDraftContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        projects: {
          ...prev[lang]?.projects,
          items: newItems
        }
      }
    }));
  };

  // 4. Articles & Contact
  const updateArticle = (field, value) => {
    setDraftContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        aboutArticle: {
          ...prev[lang]?.aboutArticle,
          [field]: value
        }
      }
    }));
  };

  const updateContact = (field, value) => {
    setDraftContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        contact: {
          ...prev[lang]?.contact,
          [field]: value
        }
      }
    }));
  };

  // 默认职业时间线字典（区分双语）
  const defaultCareerItems = [
    {
      period: '2022.07 - 2024.05',
      company: lang === 'zh' ? '理想汽车 (Li Auto)' : 'Li Auto',
      role: lang === 'zh' ? '合作伙伴管理与内容运营' : 'Partner Management & Content Operations',
      highlights: lang === 'zh' ? [
        '供应商与合作伙伴关系维护、社区运营及技术展统筹落地',
        '负责“理想伙伴说”标准化访谈内容生产流程（沟通-访谈-整理-发布）',
        '跨部门高效协作，确保外部技术合作伙伴的高标准交付'
      ] : [
        'Managed partner relations, supplier community operations, and technology exhibitions.',
        'Executed standardized content production workflow for "Li Auto Partner Stories".',
        'Fostered cross-functional coordination to ensure high-standard vendor delivery.'
      ],
      capabilitiesFormed: lang === 'zh' 
        ? ['合作伙伴管理', '跨部门协调', '内容结构化整理', '活动与展览推进']
        : ['Partner Management', 'Cross-Functional Coordination', 'Content Structuring', 'Event Operations']
    },
    {
      period: '2024.07 - 2024.09',
      company: lang === 'zh' ? '驰骛信息科技 (Chiefw)' : 'Chiefw Technology',
      role: lang === 'zh' ? '新媒体运营' : 'New Media Operations',
      highlights: lang === 'zh' ? [
        '负责新媒体内容策划与运营支持，协助品牌与渠道内容排期与发布',
        '参与运营数据梳理与分析，优化新媒体渠道传播与协作效率'
      ] : [
        'Managed new media content planning and operational support for brand channels.',
        'Structured operational metrics to optimize social media channel reach and workflow efficiency.'
      ],
      capabilitiesFormed: lang === 'zh'
        ? ['新媒体内容运营', '渠道数据梳理', '传播策划']
        : ['New Media Operations', 'Channel Data Analysis', 'Content Strategy']
    },
    {
      period: '2025.02 - 2025.09',
      company: lang === 'zh' ? '滴滴出行 (Didi)' : 'Didi',
      role: lang === 'zh' ? '渠道运营与成本控制' : 'Channel Operations & Cost Control',
      highlights: lang === 'zh' ? [
        '负责渠道商户分层管理与运营督导，监控交易指标与履约风险',
        '优化合作条款与交易分润机制，引入竞价机制降低单笔交易沉没成本 15%+',
        '精细化预算再分配，释放 20 万+ 灵活预算提升运营效率'
      ] : [
        'Supervised merchant tiering, tracked transaction metrics, and managed compliance risks.',
        'Optimized commission terms and bidding mechanisms, reducing unit transaction costs by 15%+.',
        'Reallocated operational budgets, freeing up RMB 200K+ for high-efficiency channels.'
      ],
      capabilitiesFormed: lang === 'zh'
        ? ['渠道与商户运营', '商业成本优化', '预算精细化再分配', '关键 KPI 达成跟踪']
        : ['Channel Operations', 'Cost Optimization', 'Budget Reallocation', 'KPI Governance']
    },
    {
      period: 'CURRENT',
      company: lang === 'zh' ? '探索下一阶段 (Exploring Next Chapter)' : 'Exploring Next Chapter',
      role: lang === 'zh' ? '开放探索中' : 'Open to Opportunities',
      highlights: lang === 'zh' ? [
        '总结沉淀跨部门协同、运营管理与合作伙伴沟通的可迁移能力',
        '借助 AI 工具（Gemini / VS Code）提升信息处理、内容生产与数字化产品落地效率',
        '积极寻找能创造复合价值的业务运营、合作伙伴协同与项目推进节点'
      ] : [
        'Consolidating transferable skills across coordination, operations, and partner relations.',
        'Utilizing AI workflow (Gemini / VS Code) to boost information design and digital execution.',
        'Exploring impactful roles across operations, partner governance, and project coordination.'
      ],
      capabilitiesFormed: lang === 'zh'
        ? ['跨界可迁移能力', 'AI 辅助工作流', '结构化问题解决']
        : ['Transferable Capability', 'AI-Assisted Workflow', 'Structured Problem Solving']
    }
  ];

  // 双语默认成果字典
  const defaultOutcomes = lang === 'zh' ? [
    ["统筹 10+ 核心伙伴参展", "展示满意度达 98%", "全流程零失误交付"],
    ["制定直播话术、后链路转化标准化 SOP", "直播线索转化率达 50%", "达成团队西区抖音渠道 Q3 线索目标"],
    ["释放 20万+ 灵活预算", "单笔交易沉没成本下降 15%+", "优化商户梯队履约效率"],
    ["构建常态化数据监测看板", "及时识别履约风险项", "保障交易通道稳定性"]
  ] : [
    ["10+ Key Vendors Coordinated", "98% Partner Satisfaction", "Zero-Error Execution"],
    ["50% Lead Conversion Rate", "Standardized Script SOPs", "Met West Region Q3 Sales Target"],
    ["RMB 200K+ Budget Reallocated", "15%+ Unit Transaction Cost Reduction", "Streamlined Merchant Governance"],
    ["Risk Alert Model Built", "Regular Dashboard Tracking", "Stable Merchant Compliance"]
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col font-sans text-[#111111]">
        
        {/* 顶部 Header */}
        <div className="p-4 border-b border-[#E5E5E0] flex items-center justify-between bg-[#FBFBFA]">
          <div className="flex items-center space-x-3">
            <h3 className="font-serif font-bold text-base text-[#111111]">
              {lang === 'zh' ? '全模块内容管理后台' : 'Content Management System'}
            </h3>
            <div className="flex border border-[#E5E5E0] rounded-xs p-0.5 bg-white font-mono text-xs">
              <button
                onClick={() => setEditLang('zh')}
                className={`px-2 py-0.5 rounded-xs ${editLang === 'zh' ? 'bg-[#1E40AF] text-white font-bold' : 'text-[#666666]'}`}
              >
                中文
              </button>
              <button
                onClick={() => setEditLang('en')}
                className={`px-2 py-0.5 rounded-xs ${editLang === 'en' ? 'bg-[#1E40AF] text-white font-bold' : 'text-[#666666]'}`}
              >
                EN
              </button>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-[#666666] hover:text-[#111111]">
            <X size={18} />
          </button>
        </div>

        {/* Tab 导航 */}
        <div className="flex overflow-x-auto border-b border-[#E5E5E0] bg-[#FBFBFA] font-mono text-xs no-scrollbar">
          <button
            onClick={() => setActiveTab('hero')}
            className={`px-3 py-2.5 font-bold border-b-2 whitespace-nowrap ${activeTab === 'hero' ? 'border-[#1E40AF] text-[#1E40AF]' : 'border-transparent text-[#666666]'}`}
          >
            01/02 {lang === 'zh' ? '个人与快照' : 'Hero & Stats'}
          </button>
          <button
            onClick={() => setActiveTab('career')}
            className={`px-3 py-2.5 font-bold border-b-2 whitespace-nowrap ${activeTab === 'career' ? 'border-[#1E40AF] text-[#1E40AF]' : 'border-transparent text-[#666666]'}`}
          >
            03 {lang === 'zh' ? '职业轨迹' : 'Career'}
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-2.5 font-bold border-b-2 whitespace-nowrap ${activeTab === 'projects' ? 'border-[#1E40AF] text-[#1E40AF]' : 'border-transparent text-[#666666]'}`}
          >
            04 {lang === 'zh' ? '案例全量编辑' : 'Cases'}
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-3 py-2.5 font-bold border-b-2 whitespace-nowrap ${activeTab === 'about' ? 'border-[#1E40AF] text-[#1E40AF]' : 'border-transparent text-[#666666]'}`}
          >
            07 {lang === 'zh' ? '文章与链接' : 'Articles'}
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-2.5 font-bold border-b-2 whitespace-nowrap ${activeTab === 'contact' ? 'border-[#1E40AF] text-[#1E40AF]' : 'border-transparent text-[#666666]'}`}
          >
            08 {lang === 'zh' ? '联系方式' : 'Contact'}
          </button>
        </div>

        {/* 内容容器 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: HERO & STATS */}
          {activeTab === 'hero' && (
            <div className="space-y-6 text-xs">
              <div className="space-y-3">
                <label className="font-mono font-bold text-[#1E40AF] block uppercase">01 / Name & Title</label>
                <input
                  type="text"
                  value={content.hero?.name || ''}
                  onChange={(e) => updateHero('name', e.target.value)}
                  className="w-full p-2 border border-[#E5E5E0] rounded-xs font-sans text-sm font-bold focus:border-[#1E40AF] outline-none"
                  placeholder="沈绘丹 / Huidan Shen"
                />
              </div>

              <div className="space-y-3">
                <label className="font-mono font-bold text-[#1E40AF] block uppercase">Bio</label>
                <textarea
                  rows={4}
                  value={content.hero?.bio || ''}
                  onChange={(e) => updateHero('bio', e.target.value)}
                  className="w-full p-2 border border-[#E5E5E0] rounded-xs font-sans focus:border-[#1E40AF] outline-none"
                />
              </div>

              <div className="space-y-4 border-t border-[#E5E5E0] pt-4">
                <label className="font-mono font-bold text-[#1E40AF] block uppercase">02 / Metrics</label>
                {(content.hero?.stats || [{}, {}, {}]).map((st, idx) => (
                  <div key={idx} className="p-3 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs space-y-2">
                    <div className="font-mono font-bold text-[#666666]">METRIC 0{idx + 1}</div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Value"
                        value={st.value || ''}
                        onChange={(e) => updateStat(idx, 'value', e.target.value)}
                        className="p-1.5 border border-[#E5E5E0] rounded-xs font-mono font-bold"
                      />
                      <input
                        type="text"
                        placeholder="Label"
                        value={st.label || ''}
                        onChange={(e) => updateStat(idx, 'label', e.target.value)}
                        className="p-1.5 border border-[#E5E5E0] rounded-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CAREER */}
          {activeTab === 'career' && (
            <div className="space-y-6 text-xs">
              <label className="font-mono font-bold text-[#1E40AF] block uppercase">03 / Career Timeline</label>
              {defaultCareerItems.map((defaultItem, idx) => {
                const item = content.career?.items?.[idx] || defaultItem;
                const highlightsStr = Array.isArray(item.highlights) ? item.highlights.join('\n') : (item.highlights || '');
                const capabilitiesStr = Array.isArray(item.capabilitiesFormed) ? item.capabilitiesFormed.join('\n') : (item.capabilitiesFormed || '');

                return (
                  <div key={idx} className="p-4 border border-[#E5E5E0] bg-[#FBFBFA] rounded-xs space-y-3">
                    <div className="font-mono font-bold text-[#1E40AF] border-b border-[#E5E5E0] pb-1 flex justify-between">
                      <span>EXPERIENCE 0{idx + 1}</span>
                      <span className="text-[#666666] font-mono">{item.period || defaultItem.period}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-mono font-bold text-[#111111] block">Period</label>
                        <input
                          type="text"
                          value={item.period || defaultItem.period}
                          onChange={(e) => updateCareer(idx, 'period', e.target.value)}
                          className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-mono font-bold text-[#1E40AF]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono font-bold text-[#111111] block">Company</label>
                        <input
                          type="text"
                          value={item.company || defaultItem.company}
                          onChange={(e) => updateCareer(idx, 'company', e.target.value)}
                          className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-serif font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#111111] block">Role</label>
                      <input
                        type="text"
                        value={item.role || defaultItem.role}
                        onChange={(e) => updateCareer(idx, 'role', e.target.value)}
                        className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">Highlights (One per line)</label>
                      <textarea
                        rows={3}
                        value={highlightsStr}
                        onChange={(e) => updateCareerHighlights(idx, e.target.value)}
                        className="w-full p-2 border border-[#E5E5E0] bg-white rounded-xs font-sans text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">Formed Capabilities (One per line)</label>
                      <textarea
                        rows={2}
                        value={capabilitiesStr}
                        onChange={(e) => updateCareerCapabilities(idx, e.target.value)}
                        className="w-full p-2 border border-[#E5E5E0] bg-white rounded-xs font-mono text-xs"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6 text-xs">
              <label className="font-mono font-bold text-[#1E40AF] block uppercase">04 / Selected Cases</label>
              {(content.projects?.items || [{}, {}, {}, {}]).map((item, idx) => {
                const currentOutcomes = item.outcome || defaultOutcomes[idx] || [];
                const outcomeString = Array.isArray(currentOutcomes) ? currentOutcomes.join('\n') : currentOutcomes;

                return (
                  <div key={idx} className="p-4 border border-[#E5E5E0] bg-[#FBFBFA] rounded-xs space-y-3">
                    <div className="font-mono font-bold text-[#1E40AF] border-b border-[#E5E5E0] pb-1 flex justify-between">
                      <span>CASE 0{idx + 1}</span>
                      <span className="text-[10px] text-[#666666]">{item.category || 'BUSINESS CASE'}</span>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#111111] block">Title</label>
                      <input
                        type="text"
                        value={item.title || ''}
                        onChange={(e) => updateProject(idx, 'title', e.target.value)}
                        className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">[CONTEXT]</label>
                      <textarea
                        rows={2}
                        value={item.context || ''}
                        onChange={(e) => updateProject(idx, 'context', e.target.value)}
                        className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">[MY ROLE]</label>
                      <input
                        type="text"
                        value={item.role || ''}
                        onChange={(e) => updateProject(idx, 'role', e.target.value)}
                        className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">[WHAT I DID]</label>
                      <textarea
                        rows={3}
                        value={item.whatIDid || item.description || ''}
                        onChange={(e) => updateProject(idx, 'whatIDid', e.target.value)}
                        className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">[COLLABORATION]</label>
                      <input
                        type="text"
                        value={item.collaboration || ''}
                        onChange={(e) => updateProject(idx, 'collaboration', e.target.value)}
                        className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#1E40AF] block">
                        {lang === 'zh' ? '关键成果验证 (每行一条)' : 'Key Outcomes (One per line)'}
                      </label>
                      <textarea
                        rows={3}
                        value={outcomeString}
                        onChange={(e) => updateProjectOutcome(idx, e.target.value)}
                        className="w-full p-2 border border-[#E5E5E0] bg-white rounded-xs font-mono text-xs font-bold text-[#111111] focus:border-[#1E40AF] outline-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-6 text-xs">
              <label className="font-mono font-bold text-[#1E40AF] block uppercase">07 / Articles & Link</label>
              
              <div className="p-4 border border-[#E5E5E0] bg-[#FBFBFA] rounded-xs space-y-3">
                <div className="font-mono font-bold text-[#111111]">WeChat Article</div>
                <div>
                  <label className="text-[10px] font-mono text-[#666666] block">Article Title</label>
                  <input
                    type="text"
                    value={content.aboutArticle?.title || '理想伙伴说︱耐世特李军：相信“看见”的力量，与理想汽车一起走得更好、走得更远'}
                    onChange={(e) => updateArticle('title', e.target.value)}
                    className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-[#666666] block">URL Link</label>
                  <input
                    type="text"
                    value={content.aboutArticle?.link || 'https://mp.weixin.qq.com/s/9tQYpW8GZ-M47V_sQ5eM-g'}
                    onChange={(e) => updateArticle('link', e.target.value)}
                    className="w-full p-1.5 border border-[#E5E5E0] bg-white rounded-xs font-mono text-[#1E40AF]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-6 text-xs">
              <label className="font-mono font-bold text-[#1E40AF] block uppercase">08 / Contact Info</label>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono text-[#666666] block font-bold">Email</label>
                  <input
                    type="text"
                    value={content.contact?.email !== undefined ? content.contact.email : 'huidanshen@163.com'}
                    onChange={(e) => updateContact('email', e.target.value)}
                    className="w-full p-2 border border-[#E5E5E0] rounded-xs font-mono font-bold text-sm focus:border-[#1E40AF] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-[#666666] block font-bold">WeChat</label>
                  <input
                    type="text"
                    value={content.contact?.wechat !== undefined ? content.contact.wechat : 'shenhuidan_'}
                    onChange={(e) => updateContact('wechat', e.target.value)}
                    className="w-full p-2 border border-[#E5E5E0] rounded-xs font-mono font-bold text-sm focus:border-[#1E40AF] outline-none"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 底部 Save / Reset 按钮 */}
        <div className="p-4 border-t border-[#E5E5E0] bg-[#FBFBFA] flex items-center justify-between font-mono text-xs">
          <button
            onClick={onReset}
            className="px-3 py-2 border border-[#E5E5E0] text-[#666666] hover:text-[#111111] bg-white rounded-xs flex items-center space-x-1"
          >
            <RotateCcw size={14} />
            <span>{lang === 'zh' ? '重置默认' : 'Reset'}</span>
          </button>
          
          <button
            onClick={onSave}
            className="px-5 py-2 bg-[#1E40AF] text-white font-bold rounded-xs hover:bg-blue-800 transition-colors flex items-center space-x-1.5"
          >
            <Save size={14} />
            <span>{lang === 'zh' ? '保存修改并应用' : 'Save & Apply'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
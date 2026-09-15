const defaultContent = {
  zh: {
    hero: {
      name: "沈绘丹",
      title: "合作伙伴管理 · 渠道运营 · 业务运营",
      bio: "我擅长连接人与资源，并推动执行，将业务需求转化为可衡量的结果。",
      stats: [
        { value: "3+ 年", label: "跨部门协作经验" },
        { value: "20 万+", label: "灵活预算释放" },
        { value: "15%+", label: "单笔交易成本下降" }
      ]
    },
    career: {
      title: "职业轨迹",
      highlightNotice: "关键职业阶段 · 理想汽车",
      items: [
        {
          id: "career-1",
          year: "2024 – 至今",
          company: "理想汽车 (Li Auto)",
          role: "合作伙伴运营 / Partner Operations",
          highlight: true,
          insight: "在大型组织与外部生态协作中，机制的标准化比单点沟通效率高 10 倍。",
          points: [
            "负责合作伙伴技术展等重磅活动落地，统筹跨部门资源与供应商全流程交付。",
            "构建生态伙伴权责与激励规则，推动项目执行效率与协作满意度显著提升。"
          ]
        },
        {
          id: "career-2",
          year: "2022 – 2024",
          company: "渠道与业务运营实战阶段",
          role: "业务运营专家 / Channel Operations",
          highlight: false,
          insight: "运营的本质是建立可复用的闭环，从数据中找到边际成本降低的突破口。",
          points: [
            "精细化管理渠道资源，优化成本结构，累计释放 20 万+ 灵活业务预算。",
            "通过流程重塑与交易链路优化，实现单笔交易成本降低 15% 以上。"
          ]
        }
      ]
    },
    projects: {
      title: "精选项目",
      subtitle: "专注于生态搭建、渠道效率提升与大事件落地",
      items: [
        {
          id: "01",
          title: "理想汽车 – 合作伙伴技术展",
          category: "Partner Management · Event Operations",
          description: "统筹跨部门团队与外部核心技术合作伙伴，完成全链路展示、流程对接与现场运营，确保高标准交付。",
          metrics: ["统筹 10+ 核心伙伴展示", "满意度达 98%", "全流程零失误交付"],
          image: "",
          isDashboard: false
        },
        {
          id: "02",
          title: "渠道激励与协同规则升级",
          category: "Channel Operations · Governance",
          description: "梳理渠道协作中的堵点，制定清晰的权责界面与考评激励机制，提升合作伙伴响应速度与业务达成率。",
          metrics: ["响应时效提升 30%", "协同流程标准化 100%"],
          image: "",
          isDashboard: false
        },
        {
          id: "03",
          title: "交易成本优化与预算再分配",
          category: "Business Operations · Cost Control",
          description: "通过拆解交易环节费用结构，重塑合作条款并引入竞价机制，降低单笔交易沉没成本。",
          metrics: ["释放 20万+ 灵活预算", "单笔交易成本下降 15%+"],
          image: "",
          isDashboard: false
        },
        {
          id: "04",
          title: "合作伙伴数据看板与风险监测",
          category: "Data & Risk · Desensitized Case Study",
          description: "搭建数字化渠道监测体系，实时跟踪合作方履约率与异常交易风险。（本案例展示逻辑架构，敏感数据已脱敏）",
          metrics: ["自动化风险识别率 94.2%", "规则精细度提升 18.4%"],
          image: "",
          isDashboard: true
        }
      ]
    },
    notes: [
      {
        title: "生态合作的核心是“规则先于人情”",
        category: "PARTNER MANAGEMENT",
        content: "在管理外部合作伙伴时，清晰的接口定义与透明的权责划分比频繁的沟通更有价值。标准化机制能让 80% 的常规协作自动高效运转。"
      },
      {
        title: "渠道运营的边际效益来自于流程重塑",
        category: "CHANNEL OPERATIONS",
        content: "寻找成本下降空间不能靠硬性压价，而是要拆解交易链路中的损耗点。优化 1 步冗余流程，往往能为整条链路带来 15% 以上的效率提升。"
      },
      {
        title: "业务运营需要“从数据透视真相”",
        category: "BUSINESS OPERATIONS",
        content: "数据不仅是复盘的总结，更是预算分配的导航仪。将资金投向转化回报率更高的节点，才能在有限预算下创造最大的协同价值。"
      }
    ],
    skills: {
      title: "核心能力矩阵",
      categories: [
        {
          title: "合作伙伴管理 (Partner Management)",
          list: ["生态伙伴搭建与权责规则制定", "跨企业联合项目统筹与全流程交付", "供应商绩效评估与关系维护"]
        },
        {
          title: "渠道与业务运营 (Operations)",
          list: ["交易成本优化与预算结构重塑", "业务闭环设计与流程标准化", "数据驱动的渠道风险与履约监测"]
        }
      ]
    },
    education: {
      title: "教育背景",
      items: [
        {
          school: "中国传媒大学",
          degree: "硕士学位 (Master's Degree)",
          year: "硕士阶段"
        },
        {
          school: "杭州师范大学",
          degree: "学士学位 (Bachelor's Degree)",
          year: "本科阶段"
        }
      ]
    },
    about: {
      title: "关于我",
      paragraphs: [
        "我是沈绘丹，具备 3 年以上跨部门协作、合作伙伴管理与渠道运营经验，曾参与理想汽车合作伙伴技术展等重大项目的策划与落地。",
        "我专注于将复杂的跨界沟通转化为标准化的工作流，以数据为导向降低运营成本，提升组织与生态系统的整体协同效率。"
      ],
      highlights: [
        "具备强烈的资源连接与项目推动落地能力",
        "擅长在复杂商业生态中制定规则与降低成本",
        "端到端执行力与高标准交付意识"
      ]
    },
    contact: {
      email: "huidanshen@example.com",
      wechat: "微信号 / 电话: 详见简历附件",
      note: "欢迎通过 Email 或微信与我探讨合作伙伴管理与业务运营相关机会。"
    }
  },
  en: {
    hero: {
      name: "Huidan Shen",
      title: "Partner Management · Channel Operations · Business Operations",
      bio: "I connect people, resources, and execution to turn operational needs into measurable business outcomes.",
      stats: [
        { value: "3+ Years", label: "Cross-functional Experience" },
        { value: "RMB 200K+", label: "Flexible Budget Saved" },
        { value: "15%+", label: "Per-transaction Cost Reduction" }
      ]
    },
    career: {
      title: "Career Journey",
      highlightNotice: "Key Phase · Li Auto",
      items: [
        {
          id: "career-1",
          year: "2024 – Present",
          company: "Li Auto",
          role: "Partner Operations Specialist",
          highlight: true,
          insight: "In large ecosystem collaborations, standardized mechanisms are 10x more effective than one-off communications.",
          points: [
            "Led major events like Li Auto Partner Technology Exhibition, managing cross-functional resources and vendor execution.",
            "Established partner responsibility & incentive rules, driving collaboration efficiency and partner satisfaction."
          ]
        },
        {
          id: "career-2",
          year: "2022 – 2024",
          company: "Channel & Business Operations Practice",
          role: "Operations Specialist",
          highlight: false,
          insight: "Operations is about building repeatable closed loops to find cost-efficiency breakthroughs in data.",
          points: [
            "Optimized channel resource allocation, unlocking RMB 200K+ in flexible operational budget.",
            "Streamlined transactional workflows, achieving over 15% cost reduction per transaction."
          ]
        }
      ]
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Focusing on Ecosystem Governance, Channel Efficiency, and Major Event Execution",
      items: [
        {
          id: "01",
          title: "Li Auto – Partner Technology Exhibition",
          category: "Partner Management · Event Operations",
          description: "Coordinated cross-functional teams and top-tier tech partners for end-to-end event execution and high-standard delivery.",
          metrics: ["10+ Key Tech Partners Managed", "98% Satisfaction Rate", "Zero-fault Delivery"],
          image: "",
          isDashboard: false
        },
        {
          id: "02",
          title: "Channel Incentive & Collaboration Governance",
          category: "Channel Operations · Governance",
          description: "Identified channel friction points and established clear governance interfaces & incentive rules to boost partner responsiveness.",
          metrics: ["30% Faster Response Time", "100% Process Standardized"],
          image: "",
          isDashboard: false
        },
        {
          id: "03",
          title: "Transaction Cost Optimization & Budget Reallocation",
          category: "Business Operations · Cost Control",
          description: "Deconstructed transaction cost structures and introduced competitive bidding to reduce sunk costs.",
          metrics: ["RMB 200K+ Budget Released", "15%+ Cost Reduction per Transaction"],
          image: "",
          isDashboard: false
        },
        {
          id: "04",
          title: "Partner Data Dashboard & Risk Monitoring",
          category: "Data & Risk · Desensitized Case Study",
          description: "Built a digital monitoring system to track partner fulfillment rates and transactional anomalies. (Desensitized sample logic).",
          metrics: ["94.2% Automated Risk Detection", "18.4% Rule Precision Improvement"],
          image: "",
          isDashboard: true
        }
      ]
    },
    notes: [
      {
        title: "Ecosystem Partner Management Starts with Rules Over Rapport",
        category: "PARTNER MANAGEMENT",
        content: "In managing external partners, clear interface definitions and transparent accountability create far more value than frequent meetings."
      },
      {
        title: "Marginal Gains in Channel Operations Come from Process Redesign",
        category: "CHANNEL OPERATIONS",
        content: "Cost reduction is not about aggressive price squeezing, but deconstructing friction points. Removing one redundant step yields 15%+ efficiency."
      },
      {
        title: "Business Operations Require Data-Driven Truth",
        category: "BUSINESS OPERATIONS",
        content: "Data is not just for post-mortems; it guides budget reallocation toward high-ROI nodes to maximize synergy within limited budgets."
      }
    ],
    skills: {
      title: "Capabilities Matrix",
      categories: [
        {
          title: "Partner Management",
          list: ["Ecosystem partner rule-making & governance", "Cross-company joint project coordination", "Vendor performance evaluation & relation management"]
        },
        {
          title: "Channel & Business Operations",
          list: ["Transaction cost optimization & budget restructuring", "Process standardization & closed-loop design", "Data-informed channel risk & fulfillment monitoring"]
        }
      ]
    },
    education: {
      title: "Academic Background",
      items: [
        {
          school: "Communication University of China",
          degree: "Master's Degree",
          year: "Master Phase"
        },
        {
          school: "Hangzhou Normal University",
          degree: "Bachelor's Degree",
          year: "Bachelor Phase"
        }
      ]
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I am Huidan Shen, with 3+ years of experience in cross-functional coordination, partner management, and channel operations, including major projects like Li Auto Partner Technology Exhibition.",
        "I focus on translating complex cross-boundary communication into standardized workflows, leveraging data to reduce costs and boost ecosystem efficiency."
      ],
      highlights: [
        "Strong resource connection & project execution skills",
        "Adept at rule-making and cost control in complex ecosystems",
        "End-to-end execution with high delivery standards"
      ]
    },
    contact: {
      email: "huidanshen@example.com",
      wechat: "WeChat / Phone: Refer to Resume Attachment",
      note: "Welcome to reach out via Email or WeChat to discuss partner management and operations opportunities."
    }
  }
};

export default defaultContent;
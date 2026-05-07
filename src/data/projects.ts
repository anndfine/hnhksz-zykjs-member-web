// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  participants: string[];
  startDate: string;
  endDate?: string;
  icon: string;
  color: string;
}

export const projects: Project[] = [
  // 科创与智造类
  {
    id: 1,
    title: "校园气象站",
    description: "实时采集温度、湿度、气压等数据",
    status: "completed",
    technologies: ["传感器", "物联网", "数据采集"],
    participants: ["科创组"],
    startDate: "2024.03",
    endDate: "2024.06",
    icon: "bi-thermometer-sun",
    color: "bg-success"
  },
  {
    id: 2,
    title: "自行车发电研究",
    description: "研究发电原理，设计制作小型发电装置",
    status: "completed",
    technologies: ["发电原理", "机械设计", "能源转换"],
    participants: ["科创组"],
    startDate: "2024.09",
    endDate: "2024.12",
    icon: "bi-bicycle",
    color: "bg-success"
  },
  {
    id: 3,
    title: "3D打印创意作品",
    description: "模型设计与打印工艺研究",
    status: "in-progress",
    technologies: ["3D建模", "3D打印", "创意设计"],
    participants: ["科创组", "文创工坊"],
    startDate: "2025.01",
    icon: "bi-printer",
    color: "bg-warning"
  },
  {
    id: 4,
    title: "科技社物联网改造",
    description: "智慧校园解决方案，实现设备远程控制",
    status: "planned",
    technologies: ["物联网", "远程控制", "智能设备"],
    participants: ["科创组"],
    startDate: "2025.09",
    icon: "bi-wifi",
    color: "bg-secondary"
  },
  
  // 机器人与电子类
  {
    id: 5,
    title: "机器人竞赛作品",
    description: "参与各类机器人竞赛",
    status: "completed",
    technologies: ["机器人设计", "编程控制", "竞赛"],
    participants: ["机器人组"],
    startDate: "2024.03",
    endDate: "2024.12",
    icon: "bi-robot",
    color: "bg-success"
  },
  {
    id: 6,
    title: "电子制作小作品",
    description: "电路设计、传感器应用实践",
    status: "in-progress",
    technologies: ["电路设计", "传感器", "电子制作"],
    participants: ["机器人组"],
    startDate: "2025.01",
    icon: "bi-cpu",
    color: "bg-warning"
  },
  
  // 航模类
  {
    id: 7,
    title: "航模作品",
    description: "航空模型设计与制作",
    status: "completed",
    technologies: ["模型制作", "空气动力学", "飞行训练"],
    participants: ["航模组"],
    startDate: "2024.09",
    endDate: "2024.12",
    icon: "bi-airplane",
    color: "bg-success"
  },
  
  // 「青芽·生趣」营（生态板块）
  {
    id: 8,
    title: "校园草本植物科普",
    description: "多媒体形式展示校园草本植物",
    status: "completed",
    technologies: ["植物识别", "科普展示", "多媒体"],
    participants: ["青芽营"],
    startDate: "2024.03",
    endDate: "2024.06",
    icon: "bi-flower1",
    color: "bg-success"
  },
  {
    id: 9,
    title: "草本植物多样性调查",
    description: "调查记录校园植物多样性及保护",
    status: "in-progress",
    technologies: ["植物调查", "多样性研究", "生态保护"],
    participants: ["青芽营"],
    startDate: "2025.01",
    icon: "bi-search",
    color: "bg-warning"
  },
  {
    id: 10,
    title: "农作物/花卉/香草种植",
    description: "环保种植实践成果（堆肥、酵素）",
    status: "in-progress",
    technologies: ["生态种植", "环保堆肥", "酵素驱虫"],
    participants: ["青芽营"],
    startDate: "2025.01",
    icon: "bi-tree",
    color: "bg-warning"
  },
  {
    id: 11,
    title: "花卉认养成长记录墙",
    description: "记录认养花卉的成长过程，绘制自然笔记",
    status: "in-progress",
    technologies: ["花卉认养", "成长记录", "自然笔记"],
    participants: ["青芽营"],
    startDate: "2025.01",
    icon: "bi-journal",
    color: "bg-warning"
  },
  {
    id: 12,
    title: "生态花境打造",
    description: "分层种植，兼顾美观与生物栖息",
    status: "in-progress",
    technologies: ["花境设计", "生态营造", "生物栖息"],
    participants: ["青芽营"],
    startDate: "2025.01",
    icon: "bi-flower2",
    color: "bg-warning"
  },
  {
    id: 13,
    title: "校园昆虫/鸟类观察日志",
    description: "记录来访的小动物，绘制生态图谱",
    status: "planned",
    technologies: ["昆虫观察", "鸟类观察", "生态图谱"],
    participants: ["青芽营"],
    startDate: "2025.09",
    icon: "bi-bug",
    color: "bg-secondary"
  },
  {
    id: 14,
    title: "环保种植实践",
    description: "自制堆肥、酵素驱虫，绿色养护",
    status: "in-progress",
    technologies: ["环保堆肥", "酵素驱虫", "绿色养护"],
    participants: ["青芽营"],
    startDate: "2025.01",
    icon: "bi-recycle",
    color: "bg-warning"
  },
  
  // 民俗·文创工坊（文创板块）
  {
    id: 15,
    title: "3D打印香囊模具/文创",
    description: "用3D打印设计制作香囊模具、节日主题装饰",
    status: "in-progress",
    technologies: ["3D打印", "香囊模具", "文创设计"],
    participants: ["文创工坊"],
    startDate: "2025.01",
    icon: "bi-bag",
    color: "bg-warning"
  },
  {
    id: 16,
    title: "激光切割植物拓染工具",
    description: "用激光切割机设计拓染模板、书签等",
    status: "in-progress",
    technologies: ["激光切割", "拓染工具", "模板设计"],
    participants: ["文创工坊"],
    startDate: "2025.01",
    icon: "bi-scissors",
    color: "bg-warning"
  },
  {
    id: 17,
    title: "传统香囊制作",
    description: "使用本社种植的香草，结合传统工艺",
    status: "in-progress",
    technologies: ["传统工艺", "香囊制作", "香草应用"],
    participants: ["文创工坊", "青芽营"],
    startDate: "2025.01",
    icon: "bi-heart",
    color: "bg-warning"
  },
  {
    id: 18,
    title: "植物拓染文创作品",
    description: "用植物叶片进行拓染创作",
    status: "in-progress",
    technologies: ["植物拓染", "文创作品", "传统工艺"],
    participants: ["文创工坊"],
    startDate: "2025.01",
    icon: "bi-palette",
    color: "bg-warning"
  },
  {
    id: 19,
    title: "传统节日美食制作",
    description: "青团、桂花糕、香草饮品等",
    status: "in-progress",
    technologies: ["传统美食", "节日文化", "香草应用"],
    participants: ["文创工坊", "青芽营"],
    startDate: "2025.01",
    icon: "bi-cake",
    color: "bg-warning"
  },
  
  // AI与智能应用类
  {
    id: 20,
    title: "校园AI智能助手",
    description: "基于大模型API，提供校园问答、活动推荐",
    status: "planned",
    technologies: ["大模型", "AI助手", "校园应用"],
    participants: ["AI组"],
    startDate: "2025.09",
    icon: "bi-chat",
    color: "bg-secondary"
  },
  {
    id: 21,
    title: "AI植物识别系统",
    description: "用手机拍照识别校园植物，辅助生态组调查",
    status: "in-progress",
    technologies: ["图像识别", "植物识别", "AI应用"],
    participants: ["AI组", "青芽营"],
    startDate: "2025.01",
    icon: "bi-camera",
    color: "bg-warning"
  },
  {
    id: 22,
    title: "AI视觉巡线小车",
    description: "用摄像头识别道路，实现自动驾驶",
    status: "in-progress",
    technologies: ["计算机视觉", "自动驾驶", "机器人"],
    participants: ["AI组", "机器人组"],
    startDate: "2025.01",
    icon: "bi-car-front",
    color: "bg-warning"
  },
  {
    id: 23,
    title: "语音控制台灯",
    description: "通过语音指令控制灯光",
    status: "completed",
    technologies: ["语音识别", "智能控制", "物联网"],
    participants: ["AI组"],
    startDate: "2024.09",
    endDate: "2024.12",
    icon: "bi-lightbulb",
    color: "bg-success"
  },
  
  // 融媒体类
  {
    id: 24,
    title: "社团活动影像记录",
    description: "拍摄记录社团精彩瞬间",
    status: "in-progress",
    technologies: ["摄影", "视频制作", "活动记录"],
    participants: ["融媒体组"],
    startDate: "2025.01",
    icon: "bi-camera-video",
    color: "bg-warning"
  },
  {
    id: 25,
    title: "科普短视频/推文",
    description: "制作科技科普内容",
    status: "planned",
    technologies: ["科普制作", "新媒体", "内容创作"],
    participants: ["融媒体组"],
    startDate: "2025.09",
    icon: "bi-newspaper",
    color: "bg-secondary"
  }
];
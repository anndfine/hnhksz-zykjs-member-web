// src/data/photos.ts
export interface Photo {
  id: number;
  title: string;
  description: string;
  src: string;
  category: string;
  date?: string;
  tags: string[];
}

export const photos: Photo[] = [
  // 3181b430-f60d-4e6f-bb5f-8df735818162 目录 - 科技社成员在操场种植的向日葵
  {
    id: 1,
    title: "向日葵种植",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/13546e0a8f281242a8e3e1a657e177e1_720.jpg",
    category: "生态种植",
    tags: ["青芽营", "生态种植", "向日葵"]
  },
  {
    id: 2,
    title: "生态观察",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/611adcc09ebcc5ef088996e92ae11f57_720.jpg",
    category: "生态种植",
    tags: ["青芽营", "生态观察", "植物养护"]
  },
  {
    id: 3,
    title: "团队协作",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/6a93bc2b19235f001620c95a7bc1ac41_720.jpg",
    category: "生态种植",
    tags: ["团队协作", "生态种植", "集体活动"]
  },
  {
    id: 4,
    title: "创意实践",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/b515c469cb5d19bff63e213ebbce3ffe_720.jpg",
    category: "生态种植",
    tags: ["创意实践", "生态种植", "动手能力"]
  },
  {
    id: 5,
    title: "技术交流",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/c8437905f7b9378d2092a67e4e4b0ac6_720.jpg",
    category: "生态种植",
    tags: ["技术交流", "生态种植", "经验分享"]
  },
  {
    id: 6,
    title: "成果展示",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/cc27fae8074949a2a0a29830ea16336a_720.jpg",
    category: "生态种植",
    tags: ["成果展示", "生态种植", "项目成果"]
  },
  {
    id: 7,
    title: "学习研讨",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/e7a6bccc87af94d3294b8af5c89a59d5_720.jpg",
    category: "生态种植",
    tags: ["学习研讨", "生态种植", "知识分享"]
  },
  {
    id: 8,
    title: "户外实践",
    description: "科技社成员在操场种植的向日葵",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/3181b430-f60d-4e6f-bb5f-8df735818162/ed31fdf78c35907eb36ec11dde0a5aea_720.jpg",
    category: "生态种植",
    tags: ["户外实践", "生态种植", "自然环境"]
  },
  
  // 6f27bf4e-79c3-4486-b624-7df833efb437 目录 - 科技社服务器调试
  {
    id: 9,
    title: "服务器调试",
    description: "科技社服务器调试",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/6f27bf4e-79c3-4486-b624-7df833efb437/5ab2a5f8c56428f869651dd78db4dc22_720.jpg",
    category: "技术维护",
    tags: ["服务器", "技术调试", "硬件维护"]
  },
  
  // 9c45e908-627d-4170-baf4-e02baf308cf8 目录 - 香囊制作
  {
    id: 10,
    title: "香囊制作",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/0a2dd9be02f40a22c6e58623feb0ea3e_720.jpg",
    category: "文创制作",
    tags: ["香囊制作", "传统工艺", "文创工坊"]
  },
  {
    id: 11,
    title: "传统工艺",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/251c631090fd4266b96cc93ac096bfb7_720.jpg",
    category: "文创制作",
    tags: ["传统工艺", "香囊制作", "手工制作"]
  },
  {
    id: 12,
    title: "创意设计",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/936ad727b2a21c663685f3272d11002e_720.jpg",
    category: "文创制作",
    tags: ["创意设计", "香囊制作", "艺术创作"]
  },
  {
    id: 13,
    title: "材料准备",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/a125b9986fdd1d4813926e6cf42f64f1_720.jpg",
    category: "文创制作",
    tags: ["材料准备", "香囊制作", "工艺材料"]
  },
  {
    id: 14,
    title: "制作过程",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/cab2b01de440bb0dd89a7a5e8bc47bf5_720.jpg",
    category: "文创制作",
    tags: ["制作过程", "香囊制作", "手工技艺"]
  },
  {
    id: 15,
    title: "成品展示",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/cffd0d80712d159cd0d4106d094785e8_720.jpg",
    category: "文创制作",
    tags: ["成品展示", "香囊制作", "作品展示"]
  },
  {
    id: 16,
    title: "团队合作",
    description: "香囊制作",
    src: "/assets/images/c1539378-d90d-45ed-83cd-d8beb7ac0f8d/9c45e908-627d-4170-baf4-e02baf308cf8/f000ae54a13cc7b0cbd630da672bee7c_720.jpg",
    category: "文创制作",
    tags: ["团队合作", "香囊制作", "集体创作"]
  }
];

// 按类别分组照片
export const photosByCategory = photos.reduce((groups, photo) => {
  if (!groups[photo.category]) {
    groups[photo.category] = [];
  }
  groups[photo.category]!.push(photo);
  return groups;
}, {} as Record<string, Photo[]>);

// 获取所有类别
export const photoCategories = Object.keys(photosByCategory);
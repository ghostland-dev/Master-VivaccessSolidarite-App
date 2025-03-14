
interface WaterProject {
  id: number;
  name: string;
  location: string;
  type: 'well' | 'irrigation' | 'purification' | 'conservation';
  status: 'planned' | 'in_progress' | 'completed';
  description: string;
  budget: number;
  startDate?: string;
  completionDate?: string;
}

interface WaterUsageTip {
  id: number;
  title: string;
  description: string;
  category: 'household' | 'agriculture' | 'industry';
  savingPotential: string;
}

// Sample data
const waterProjects: WaterProject[] = [
  {
    id: 1,
    name: "حفر بئر القرية الجديد",
    location: "قرية أيت حمو",
    type: "well",
    status: "in_progress",
    description: "مشروع حفر بئر جديد لتوفير مياه الشرب النظيفة لسكان القرية",
    budget: 120000,
    startDate: "2025-01-15"
  },
  {
    id: 2,
    name: "نظام الري بالتنقيط",
    location: "مزارع واحة تنغير",
    type: "irrigation",
    status: "completed",
    description: "تركيب نظام ري بالتنقيط لتوفير المياه وزيادة إنتاجية المحاصيل",
    budget: 85000,
    startDate: "2024-10-05",
    completionDate: "2025-02-20"
  },
  {
    id: 3,
    name: "محطة تنقية المياه",
    location: "مركز البلدية",
    type: "purification",
    status: "planned",
    description: "إنشاء محطة صغيرة لتنقية المياه لخدمة سكان المنطقة",
    budget: 250000
  }
];

const waterTips: WaterUsageTip[] = [
  {
    id: 1,
    title: "استخدام الدش القصير",
    description: "تقليل مدة الاستحمام إلى 5 دقائق يمكن أن يوفر ما يصل إلى 35 لتر من الماء لكل استحمام",
    category: "household",
    savingPotential: "35 لتر / استحمام"
  },
  {
    id: 2,
    title: "جمع مياه الأمطار",
    description: "جمع مياه الأمطار من السطح في خزانات لاستخدامها في ري الحدائق",
    category: "household",
    savingPotential: "1000 لتر / شهر"
  },
  {
    id: 3,
    title: "الري ليلاً",
    description: "ري المزروعات في المساء أو الصباح الباكر لتقليل التبخر وتوفير المياه",
    category: "agriculture",
    savingPotential: "20-30% من استهلاك الري"
  }
];

export const waterService = {
  getWaterProjects: () => {
    return Promise.resolve(waterProjects);
  },
  
  getWaterProjectById: (id: number) => {
    const project = waterProjects.find(p => p.id === id);
    return Promise.resolve(project);
  },
  
  getWaterTips: (category?: 'household' | 'agriculture' | 'industry') => {
    if (category) {
      return Promise.resolve(waterTips.filter(tip => tip.category === category));
    }
    return Promise.resolve(waterTips);
  },
  
  reportWaterIssue: (location: string, issueType: string, description: string) => {
    const reportId = Date.now();
    
    // In a real app, this would save to a database
    console.log(`Water issue reported: ID ${reportId}, Location: ${location}, Type: ${issueType}`);
    
    return Promise.resolve({
      success: true,
      reportId,
      message: "تم تسجيل البلاغ بنجاح. سيتم التواصل معكم قريباً."
    });
  }
};

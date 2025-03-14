
interface CommunityInitiative {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'upcoming' | 'completed';
  location: string;
  startDate: string;
  endDate?: string;
  volunteersCount: number;
  organizer: string;
}

interface CommunityIssue {
  id: number;
  type: 'water' | 'electricity' | 'road' | 'waste' | 'other';
  location: string;
  description: string;
  status: 'reported' | 'in_review' | 'in_progress' | 'resolved';
  reportDate: string;
  resolvedDate?: string;
  priority: 'low' | 'medium' | 'high';
}

// Sample data
const initiatives: CommunityInitiative[] = [
  {
    id: 1,
    title: "حملة تنظيف الوادي",
    description: "مبادرة لتنظيف وادي القرية من النفايات والحفاظ على البيئة المحلية.",
    status: "active",
    location: "وادي أيت ملول",
    startDate: "2025-03-25",
    endDate: "2025-04-25",
    volunteersCount: 15,
    organizer: "جمعية البيئة المحلية"
  },
  {
    id: 2,
    title: "إعادة تأهيل المدرسة",
    description: "مشروع لتجديد مدرسة القرية وتحسين بيئة التعلم للطلاب.",
    status: "upcoming",
    location: "مدرسة القرية الابتدائية",
    startDate: "2025-05-10",
    volunteersCount: 8,
    organizer: "مجلس الآباء والمعلمين"
  },
  {
    id: 3,
    title: "تشجير القرية",
    description: "مبادرة لزراعة الأشجار في أنحاء القرية لمكافحة التصحر.",
    status: "active",
    location: "جميع أنحاء القرية",
    startDate: "2025-02-01",
    endDate: "2025-12-01",
    volunteersCount: 25,
    organizer: "جمعية التنمية المستدامة"
  }
];

const issues: CommunityIssue[] = [
  {
    id: 1,
    type: "water",
    location: "الشارع الرئيسي بالقرب من المسجد",
    description: "تسرب في أنبوب المياه الرئيسي يسبب هدر للمياه",
    status: "in_progress",
    reportDate: "2025-03-10",
    priority: "high"
  },
  {
    id: 2,
    type: "electricity",
    location: "حي الزيتون، شارع 3",
    description: "انقطاع متكرر في التيار الكهربائي خلال المساء",
    status: "reported",
    reportDate: "2025-03-12",
    priority: "medium"
  },
  {
    id: 3,
    type: "road",
    location: "الطريق المؤدي إلى المدرسة",
    description: "حفر كبيرة في الطريق تعيق حركة المرور وتشكل خطراً",
    status: "in_review",
    reportDate: "2025-03-05",
    priority: "high"
  }
];

export const civicService = {
  getInitiatives: () => {
    return Promise.resolve(initiatives);
  },
  
  getInitiativeById: (id: number) => {
    const initiative = initiatives.find(i => i.id === id);
    return Promise.resolve(initiative);
  },
  
  joinInitiative: (initiativeId: number, volunteerName: string) => {
    const index = initiatives.findIndex(i => i.id === initiativeId);
    
    if (index !== -1 && initiatives[index].status !== 'completed') {
      initiatives[index].volunteersCount += 1;
      
      return Promise.resolve({
        success: true,
        message: `تم الانضمام إلى المبادرة بنجاح. شكراً لك ${volunteerName}!`
      });
    }
    
    return Promise.resolve({
      success: false,
      message: "لم يتم العثور على المبادرة أو تم إغلاقها."
    });
  },
  
  reportIssue: (type: 'water' | 'electricity' | 'road' | 'waste' | 'other', location: string, description: string, priority: 'low' | 'medium' | 'high' = 'medium') => {
    const newIssue: CommunityIssue = {
      id: Date.now(),
      type,
      location,
      description,
      status: 'reported',
      reportDate: new Date().toISOString().split('T')[0],
      priority
    };
    
    issues.push(newIssue);
    
    return Promise.resolve({
      success: true,
      issueId: newIssue.id,
      message: "تم تسجيل البلاغ بنجاح. سيتم متابعته في أقرب وقت."
    });
  },
  
  getIssues: (status?: 'reported' | 'in_review' | 'in_progress' | 'resolved') => {
    if (status) {
      return Promise.resolve(issues.filter(issue => issue.status === status));
    }
    return Promise.resolve(issues);
  }
};

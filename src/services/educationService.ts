
interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  description: string;
  imageUrl?: string;
  duration: string;
  instructor: string;
  enrollmentCount: number;
}

interface EnrollmentInfo {
  id: number;
  courseId: number;
  userId: number;
  enrollmentDate: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
}

// Sample data
const courses: Course[] = [
  {
    id: 1,
    title: "الرياضيات الأساسية",
    category: "المرحلة الابتدائية",
    level: "مبتدئ",
    description: "دورة تغطي المفاهيم الأساسية في الرياضيات للصفوف الابتدائية",
    duration: "12 أسبوع",
    instructor: "أ. فاطمة عبدالرحمن",
    enrollmentCount: 120
  },
  {
    id: 2,
    title: "أساسيات الزراعة المستدامة",
    category: "التدريب المهني",
    level: "متوسط",
    description: "تعلم تقنيات الزراعة المستدامة المناسبة للبيئة المحلية",
    duration: "8 أسابيع",
    instructor: "م. خالد المصري",
    enrollmentCount: 85
  },
  {
    id: 3,
    title: "استخدام الحاسوب للمبتدئين",
    category: "المهارات الرقمية",
    level: "مبتدئ",
    description: "تعلم المهارات الأساسية لاستخدام الحاسوب والإنترنت",
    duration: "6 أسابيع",
    instructor: "أ. سمير العلوي",
    enrollmentCount: 210
  }
];

const enrollments: EnrollmentInfo[] = [];

export const educationService = {
  getCourses: () => {
    return Promise.resolve(courses);
  },
  
  getCourseById: (id: number) => {
    const course = courses.find(c => c.id === id);
    return Promise.resolve(course);
  },
  
  getCoursesByCategory: (category: string) => {
    const filteredCourses = courses.filter(c => c.category === category);
    return Promise.resolve(filteredCourses);
  },
  
  enrollInCourse: (courseId: number, userId: number) => {
    const newEnrollment: EnrollmentInfo = {
      id: Date.now(),
      courseId,
      userId,
      enrollmentDate: new Date().toISOString().split('T')[0],
      progress: 0,
      status: 'active'
    };
    
    enrollments.push(newEnrollment);
    
    // Update enrollment count for the course
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex !== -1) {
      courses[courseIndex].enrollmentCount += 1;
    }
    
    return Promise.resolve(newEnrollment);
  }
};

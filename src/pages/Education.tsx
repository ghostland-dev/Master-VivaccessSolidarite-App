
import React from 'react';
import PageLayout from '../components/PageLayout';
import { BookOpen, Video, FileText, Users, GraduationCap, Briefcase } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';
import { useEducationData } from '../hooks/useServiceData';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';
import { educationService } from '../services/educationService';

const Education = () => {
  // Use our custom hook to fetch courses
  const { data: courses, isLoading, error } = useEducationData.useCourses();

  const handleEnrollCourse = async (courseId: number) => {
    try {
      // In a real app, you would get the userId from authentication context
      const userId = 1; 
      const result = await educationService.enrollInCourse(courseId, userId);
      
      toast({
        title: "تم التسجيل بنجاح",
        description: "تم تسجيلك في الدورة بنجاح",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "خطأ في التسجيل",
        description: "حدث خطأ أثناء محاولة التسجيل في الدورة",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout 
      title="التعليم عن بعد" 
      subtitle="فرص تعليمية عالية الجودة للمناطق الريفية المعزولة"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا التعليمية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="دروس افتراضية للطلاب"
              description="دروس تفاعلية يتم تقديمها عبر الإنترنت لجميع المستويات الدراسية"
              icon={Video}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="محتوى تعليمي قابل للتنزيل"
              description="وصول إلى المحتوى التعليمي حتى عندما لا تكون متصلاً بالإنترنت"
              icon={FileText}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="تدريب المعلمين المحليين"
              description="برامج تطوير مهني مستمرة للمعلمين في المناطق الريفية"
              icon={Users}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="دروس محو الأمية الرقمية"
              description="دورات في المهارات الرقمية الأساسية للبالغين والأطفال"
              icon={BookOpen}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="التعليم العالي عن بعد"
              description="وصول إلى برامج الجامعات والمعاهد التقنية عبر الإنترنت"
              icon={GraduationCap}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="التدريب المهني"
              description="دورات مهنية في مجالات متنوعة لتعزيز فرص العمل"
              icon={Briefcase}
              color="bg-vivaccess-light-blue"
            />
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/education/details"
              className="inline-block bg-vivaccess-green text-white px-6 py-2 rounded-md hover:bg-vivaccess-green/90 transition-colors"
            >
              عرض التفاصيل الكاملة
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">دورات مميزة</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-8 w-24" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              حدث خطأ أثناء تحميل الدورات. يرجى المحاولة مرة أخرى.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses && courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-vivaccess-blue/20"></div>
                  <div className="p-4">
                    <span className="text-xs font-medium bg-vivaccess-blue/10 text-vivaccess-blue px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                    <h3 className="font-semibold mt-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p>المدرب: {course.instructor}</p>
                      <p>المدة: {course.duration}</p>
                      <p>عدد المسجلين: {course.enrollmentCount}</p>
                    </div>
                    <Button 
                      onClick={() => handleEnrollCourse(course.id)} 
                      variant="ghost" 
                      className="mt-4 text-vivaccess-blue font-medium text-sm hover:bg-vivaccess-blue/10"
                    >
                      سجل في الدورة
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border border-vivaccess-green text-vivaccess-green hover:bg-vivaccess-green/5"
            >
              استعراض جميع الدورات
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Education;

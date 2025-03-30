
import React from 'react';
import PageLayout from '../components/PageLayout';
import { BookOpen, Video, FileText, Users, GraduationCap, Briefcase } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const Education = () => {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-vivaccess-blue/20"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-vivaccess-blue/10 text-vivaccess-blue px-2 py-1 rounded-full">المرحلة الابتدائية</span>
                <h3 className="font-semibold mt-2">الرياضيات الأساسية</h3>
                <p className="text-sm text-muted-foreground mt-2">دورة تغطي المفاهيم الأساسية في الرياضيات للصفوف الابتدائية</p>
                <button className="mt-4 text-vivaccess-blue font-medium text-sm hover:underline">عرض الدورة</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-vivaccess-green/20"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-vivaccess-green/10 text-vivaccess-green px-2 py-1 rounded-full">التدريب المهني</span>
                <h3 className="font-semibold mt-2">أساسيات الزراعة المستدامة</h3>
                <p className="text-sm text-muted-foreground mt-2">تعلم تقنيات الزراعة المستدامة المناسبة للبيئة المحلية</p>
                <button className="mt-4 text-vivaccess-green font-medium text-sm hover:underline">عرض الدورة</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-amber-500/20"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">المهارات الرقمية</span>
                <h3 className="font-semibold mt-2">استخدام الحاسوب للمبتدئين</h3>
                <p className="text-sm text-muted-foreground mt-2">تعلم المهارات الأساسية لاستخدام الحاسوب والإنترنت</p>
                <button className="mt-4 text-amber-500 font-medium text-sm hover:underline">عرض الدورة</button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="border border-vivaccess-green text-vivaccess-green px-6 py-2 rounded-md font-medium hover:bg-vivaccess-green/5 transition-colors">
              استعراض جميع الدورات
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Education;

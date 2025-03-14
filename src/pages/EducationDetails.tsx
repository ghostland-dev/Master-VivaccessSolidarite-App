
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ArrowLeft, BookOpen, Video, FileText, Users, GraduationCap, Briefcase } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const EducationDetails = () => {
  return (
    <PageLayout 
      title="تفاصيل التعليم عن بعد" 
      subtitle="معلومات مفصلة عن خدمات التعليم عن بعد المتاحة للمناطق الريفية"
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          to="/education" 
          className="inline-flex items-center text-vivaccess-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>العودة إلى التعليم</span>
        </Link>
      </div>

      {/* Detailed Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدمات تعليمية متكاملة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="منصة التعلم الافتراضية"
              description="منصة تفاعلية للتعلم عن بعد مع إمكانية متابعة الدروس مباشرة أو مسجلة"
              icon={Video}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="مكتبة رقمية"
              description="آلاف الكتب والموارد التعليمية المتاحة للتنزيل والوصول دون اتصال بالإنترنت"
              icon={FileText}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="برامج تدريب المعلمين"
              description="دورات متخصصة لتطوير مهارات المعلمين في استخدام التكنولوجيا والتعليم عن بعد"
              icon={Users}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="ورش عمل محو الأمية الرقمية"
              description="برامج تدريبية مكثفة لتعليم المهارات الرقمية الأساسية لمختلف الفئات العمرية"
              icon={BookOpen}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="برامج شهادات معتمدة"
              description="دورات معتمدة تمنح شهادات معترف بها من مؤسسات تعليمية مرموقة"
              icon={GraduationCap}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="التوجيه المهني"
              description="خدمات استشارية للتوجيه المهني ومساعدة الطلاب في اختيار المسار المناسب"
              icon={Briefcase}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Course Dashboard */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">لوحة تحكم الدورات التعليمية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">الدورات النشطة</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-medium">الرياضيات للصف الرابع</h4>
                    <p className="text-sm text-muted-foreground">التقدم: 65%</p>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-medium">مهارات الحاسوب الأساسية</h4>
                    <p className="text-sm text-muted-foreground">التقدم: 30%</p>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">اللغة العربية للمبتدئين</h4>
                    <p className="text-sm text-muted-foreground">التقدم: 90%</p>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">جدول الدروس القادمة</h3>
              
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">العلوم - الصف الخامس</h4>
                    <span className="text-sm text-vivaccess-blue">اليوم - 10:00 ص</span>
                  </div>
                  <p className="text-sm text-muted-foreground">الأستاذ: عبد الرحمن محمد</p>
                </div>
                
                <div className="border-b pb-3">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">الجغرافيا - الصف السادس</h4>
                    <span className="text-sm text-vivaccess-blue">غداً - 11:30 ص</span>
                  </div>
                  <p className="text-sm text-muted-foreground">الأستاذة: فاطمة الزهراء</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">تاريخ المغرب - الصف الثالث الإعدادي</h4>
                    <span className="text-sm text-vivaccess-blue">الأربعاء - 9:00 ص</span>
                  </div>
                  <p className="text-sm text-muted-foreground">الأستاذ: يوسف العلوي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">إحصائيات التعليم</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-vivaccess-green mb-2">2,500+</div>
              <p className="text-muted-foreground">طالب مسجل</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">150+</div>
              <p className="text-muted-foreground">دورة تعليمية</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-vivaccess-blue mb-2">50+</div>
              <p className="text-muted-foreground">مدرس متخصص</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">25+</div>
              <p className="text-muted-foreground">مركز تعليمي</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EducationDetails;

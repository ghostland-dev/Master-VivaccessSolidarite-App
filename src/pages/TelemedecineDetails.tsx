
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ArrowLeft, Stethoscope, Video, FileText, Users, Heart, BookOpen } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const TelemedecineDetails = () => {
  return (
    <PageLayout 
      title="تفاصيل الطب عن بعد" 
      subtitle="معلومات مفصلة عن خدمات الرعاية الصحية المتاحة في المناطق الريفية"
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          to="/telemedecine" 
          className="inline-flex items-center text-vivaccess-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>العودة إلى الطب عن بعد</span>
        </Link>
      </div>

      {/* Detailed Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدمات صحية متكاملة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="الاستشارات الطبية عن بعد"
              description="استشارات طبية مباشرة مع أطباء متخصصين عبر مكالمات فيديو آمنة ومشفرة"
              icon={Video}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="برامج متابعة الأمراض المزمنة"
              description="مراقبة ومتابعة دورية للمرضى المصابين بأمراض مزمنة مثل السكري وضغط الدم"
              icon={Heart}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="السجلات الطبية الإلكترونية"
              description="حفظ وإدارة السجلات الطبية بشكل آمن مع إمكانية الوصول إليها من قبل المرضى والأطباء"
              icon={FileText}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="تدريب الكوادر الصحية المحلية"
              description="برامج تدريبية مستمرة للممرضين والعاملين الصحيين في المناطق النائية"
              icon={Users}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="حملات التوعية الصحية"
              description="برامج توعوية حول الوقاية من الأمراض والصحة العامة مصممة للمجتمعات الريفية"
              icon={BookOpen}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="شبكة الإحالة الطبية"
              description="ربط المرضى بالأطباء المتخصصين والمستشفيات عند الحاجة للرعاية المتقدمة"
              icon={Stethoscope}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Doctor Dashboard */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">أطباؤنا المتخصصون</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-center mb-1">د. محمد العلوي</h3>
              <p className="text-center text-vivaccess-blue mb-3">طب الأسرة</p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">العربية</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">الفرنسية</span>
              </div>
              <button className="w-full bg-vivaccess-blue text-white py-2 rounded-md text-sm">حجز موعد</button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-center mb-1">د. فاطمة الزهراء</h3>
              <p className="text-center text-vivaccess-blue mb-3">طب الأطفال</p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">العربية</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">الإنجليزية</span>
              </div>
              <button className="w-full bg-vivaccess-blue text-white py-2 rounded-md text-sm">حجز موعد</button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-center mb-1">د. عبد الرحيم</h3>
              <p className="text-center text-vivaccess-blue mb-3">أمراض القلب</p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">العربية</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">الفرنسية</span>
              </div>
              <button className="w-full bg-vivaccess-blue text-white py-2 rounded-md text-sm">حجز موعد</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">إحصائيات الرعاية الصحية</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-vivaccess-blue mb-2">5,000+</div>
              <p className="text-muted-foreground">استشارة طبية</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-rose-500 mb-2">30+</div>
              <p className="text-muted-foreground">طبيب متخصص</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-vivaccess-green mb-2">20+</div>
              <p className="text-muted-foreground">مركز صحي</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">95%</div>
              <p className="text-muted-foreground">نسبة رضا المرضى</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TelemedecineDetails;

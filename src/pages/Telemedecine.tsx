
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Stethoscope, Video, FileText, Users, Heart, BookOpen } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Telemedecine = () => {
  return (
    <PageLayout 
      title="الطب عن بعد" 
      subtitle="خدمات طبية عن بعد مصممة للمناطق الريفية المعزولة"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا الطبية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="استشارات طبية عن بعد"
              description="تواصل مع الأطباء المتخصصين عبر مكالمات فيديو آمنة ومباشرة"
              icon={Video}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="متابعة المرضى المزمنين"
              description="برامج مخصصة لمتابعة حالة المرضى الذين يعانون من أمراض مزمنة"
              icon={Heart}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="الملفات الطبية الإلكترونية"
              description="سجلات طبية رقمية آمنة يمكن الوصول إليها من قبل المرضى والأطباء"
              icon={FileText}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="تدريب العاملين الصحيين"
              description="برامج تدريبية للممرضين والعاملين الصحيين في المناطق النائية"
              icon={Users}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="التثقيف الصحي"
              description="موارد تعليمية حول الصحة والوقاية من الأمراض بلغات محلية"
              icon={BookOpen}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="شبكة الأطباء المتخصصين"
              description="شبكة من الأطباء المتخصصين الملتزمين بتقديم الرعاية للمناطق النائية"
              icon={Stethoscope}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">كيف تعمل خدمة الطب عن بعد</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-vivaccess-blue flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">حجز موعد</h3>
              <p className="text-muted-foreground">قم بحجز موعد مع طبيب متخصص مباشرة من هاتفك أو في مركز VivAccess المحلي</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-vivaccess-blue flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">المقابلة الطبية</h3>
              <p className="text-muted-foreground">تحدث مع الطبيب عبر مكالمة فيديو آمنة، ودعه يقيم حالتك الصحية</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-vivaccess-blue flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">المتابعة</h3>
              <p className="text-muted-foreground">احصل على الوصفات الطبية والتوصيات، وجدولة المتابعة حسب الحاجة</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-vivaccess-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">هل أنت مستعد للحصول على الرعاية الصحية؟</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المرضى الذين يستخدمون منصة VivAccess للوصول إلى رعاية صحية عالية الجودة.
          </p>
          <button className="bg-vivaccess-blue text-white px-8 py-3 rounded-md font-medium hover:bg-vivaccess-blue/90 transition-colors">
            حجز استشارة
          </button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Telemedecine;

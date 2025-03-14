
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ArrowLeft, Droplets, CloudRain, Waves, Plant, FileText, PieChart } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const WaterManagementDetails = () => {
  return (
    <PageLayout 
      title="تفاصيل إدارة المياه" 
      subtitle="نظام شامل لإدارة ومراقبة موارد المياه في المناطق الريفية"
    >
      {/* Detailed Systems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/water-management" className="flex items-center text-vivaccess-blue hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              العودة إلى إدارة المياه
            </Link>
            <h2 className="text-2xl font-bold mb-8 text-center">أنظمة المراقبة والإدارة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="مراقبة جودة المياه"
              description="أجهزة استشعار لمراقبة المعايير الرئيسية لجودة المياه في الوقت الفعلي"
              icon={Droplets}
              color="bg-vivaccess-light-blue"
            />
            <FeatureCard 
              title="التنبؤ بالأمطار"
              description="تحليل البيانات المناخية للتنبؤ بهطول الأمطار وتحسين تخطيط الري"
              icon={CloudRain}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="إدارة مياه الري"
              description="أنظمة ذكية لتوزيع مياه الري بكفاءة على المحاصيل المختلفة"
              icon={Waves}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="الزراعة المقتصدة للمياه"
              description="تقنيات للزراعة باستخدام كميات أقل من المياه مع الحفاظ على الإنتاجية"
              icon={Plant}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="التدريب والتوعية"
              description="موارد تعليمية حول الاستخدام المستدام للمياه للمزارعين المحليين"
              icon={FileText}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="تقارير الأداء"
              description="تحليلات وتقارير دورية عن استهلاك المياه وكفاءة الاستخدام"
              icon={PieChart}
              color="bg-rose-500"
            />
          </div>
        </div>
      </section>

      {/* Real-time Monitoring */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">مراقبة حية لموارد المياه</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">مستوى المياه الجوفية</h3>
              <div className="h-40 bg-vivaccess-blue/10 rounded flex items-center justify-center">
                رسم بياني تفاعلي
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                يتم تحديث البيانات كل ساعة
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">جودة المياه</h3>
              <div className="h-40 bg-vivaccess-green/10 rounded flex items-center justify-center">
                مؤشرات الجودة
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                معايير الجودة الرئيسية
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">استهلاك المياه</h3>
              <div className="h-40 bg-amber-500/10 rounded flex items-center justify-center">
                إحصائيات الاستهلاك
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                تحليل الاستهلاك اليومي
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WaterManagementDetails;

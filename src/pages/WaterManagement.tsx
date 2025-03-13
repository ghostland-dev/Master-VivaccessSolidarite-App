
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Droplets, BarChart3, BookOpen, Users, Bell, FileText } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const WaterManagement = () => {
  return (
    <PageLayout 
      title="إدارة موارد المياه" 
      subtitle="حلول مستدامة لإدارة موارد المياه في المناطق الريفية"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا في إدارة المياه</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="مراقبة جودة المياه"
              description="أنظمة مراقبة لقياس وتتبع جودة المياه في الآبار والمصادر المائية"
              icon={Droplets}
              color="bg-vivaccess-light-blue"
            />
            <FeatureCard 
              title="نظام الإنذار المبكر"
              description="تنبيهات فورية عند انخفاض مستويات المياه أو تدهور جودتها"
              icon={Bell}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="تحليل استخدام المياه"
              description="تتبع وتحليل أنماط استهلاك المياه لتحسين الكفاءة"
              icon={BarChart3}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="تقنيات الري الفعال"
              description="التدريب على تقنيات الري بالتنقيط وأنظمة توفير المياه"
              icon={BookOpen}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="تدريب لجان إدارة المياه"
              description="برامج تدريبية للجان المحلية المسؤولة عن إدارة موارد المياه"
              icon={Users}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="دليل الموارد المائية"
              description="خرائط وموارد تعليمية حول مصادر المياه المحلية"
              icon={FileText}
              color="bg-violet-600"
            />
          </div>
        </div>
      </section>
      
      {/* Water Status Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">لوحة معلومات الموارد المائية</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">مستوى المياه الحالي</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-vivaccess-blue">65%</span>
                  <span className="text-red-500 text-sm mr-2">↓ 5%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                  <div className="bg-vivaccess-blue h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">جودة المياه</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-green-500">جيدة</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  <div className="h-2 w-full bg-green-500 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">الاستهلاك اليومي</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold">120 لتر</span>
                  <span className="text-green-500 text-sm mr-2">↓ 10%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">أقل من المتوسط الشهري</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">الآبار المتاحة</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold">6/8</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">بئران قيد الصيانة</p>
              </div>
            </div>
            
            <div className="h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-muted-foreground">رسم بياني لمستويات المياه (الأشهر الستة الماضية)</p>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-vivaccess-light-blue text-white px-6 py-2 rounded-md font-medium hover:bg-vivaccess-light-blue/90 transition-colors">
                عرض التقرير المفصل
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tips Section */}
      <section className="py-16 bg-vivaccess-light-blue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">نصائح لتوفير المياه</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <Droplets className="w-5 h-5 text-vivaccess-light-blue mr-2" />
                الري الفعال
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-vivaccess-light-blue mr-2">•</span>
                  استخدم تقنيات الري بالتنقيط لتوفير ما يصل إلى 60% من المياه
                </li>
                <li className="flex items-start">
                  <span className="text-vivaccess-light-blue mr-2">•</span>
                  قم بالري في الصباح الباكر أو المساء لتقليل التبخر
                </li>
                <li className="flex items-start">
                  <span className="text-vivaccess-light-blue mr-2">•</span>
                  استخدم أنظمة الري الذكية التي تستجيب لظروف التربة والطقس
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <Droplets className="w-5 h-5 text-vivaccess-light-blue mr-2" />
                الاستخدام المنزلي
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-vivaccess-light-blue mr-2">•</span>
                  إصلاح التسربات فورًا لتوفير ما يصل إلى 20 لترًا يوميًا
                </li>
                <li className="flex items-start">
                  <span className="text-vivaccess-light-blue mr-2">•</span>
                  جمع مياه الأمطار للاستخدام في الحدائق والتنظيف
                </li>
                <li className="flex items-start">
                  <span className="text-vivaccess-light-blue mr-2">•</span>
                  إعادة استخدام المياه الرمادية للري عندما يكون ذلك ممكنًا
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WaterManagement;

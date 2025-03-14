import React from 'react';
import PageLayout from '../components/PageLayout';
import { Droplets, CloudRain, Waves, Leaf, FileText, Users } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const WaterManagement = () => {
  return (
    <PageLayout 
      title="إدارة المياه" 
      subtitle="حلول مبتكرة لإدارة موارد المياه في المناطق الريفية"
    >
      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدمات إدارة المياه</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="مراقبة جودة المياه"
              description="نظام متكامل لمراقبة جودة المياه في الآبار والمصادر المائية"
              icon={Droplets}
              color="bg-vivaccess-light-blue"
            />
            <FeatureCard 
              title="التنبؤ بالطقس"
              description="توقعات دقيقة لهطول الأمطار لتحسين إدارة الموارد المائية"
              icon={CloudRain}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="إدارة الري"
              description="أنظمة ري ذكية لتحسين استخدام المياه في الزراعة"
              icon={Waves}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="الزراعة المستدامة"
              description="تقنيات وممارسات للحفاظ على المياه في الزراعة"
              icon={Leaf}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="التدريب والتوعية"
              description="برامج تدريبية حول الاستخدام المستدام للمياه"
              icon={FileText}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="إدارة المجتمع"
              description="إشراك المجتمع المحلي في إدارة الموارد المائية"
              icon={Users}
              color="bg-rose-500"
            />
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/water-management/details"
              className="inline-block bg-vivaccess-blue text-white px-6 py-2 rounded-md hover:bg-vivaccess-blue/90 transition-colors"
            >
              عرض التفاصيل الكاملة
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">إجراءات سريعة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              الإبلاغ عن مشكلة
            </button>
            <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              طلب صيانة
            </button>
            <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              عرض التقارير
            </button>
            <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              جدولة التدريب
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WaterManagement;

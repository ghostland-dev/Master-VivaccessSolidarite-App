
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ShoppingCart, CreditCard, Briefcase, TrendingUp, Building, Users } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const EconomicDevelopment = () => {
  return (
    <PageLayout 
      title="التنمية الاقتصادية" 
      subtitle="تعزيز الاقتصاد المحلي وخلق فرص عمل للمجتمعات الريفية"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا الاقتصادية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="سوق المنتجات المحلية"
              description="منصة رقمية لبيع المنتجات الحرفية والزراعية المحلية"
              icon={ShoppingCart}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="خدمات التمويل متناهي الصغر"
              description="قروض صغيرة وخدمات مالية للمشاريع الصغيرة"
              icon={CreditCard}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="فرص العمل"
              description="منصة لنشر فرص العمل المتاحة في المنطقة"
              icon={Briefcase}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="التدريب على ريادة الأعمال"
              description="دورات تدريبية لتنمية مهارات ريادة الأعمال والإدارة"
              icon={TrendingUp}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="التعاونيات المحلية"
              description="دعم إنشاء وتطوير التعاونيات المحلية"
              icon={Building}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="شبكات التواصل المهنية"
              description="ربط رواد الأعمال المحليين بالموارد والمستثمرين المحتملين"
              icon={Users}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Marketplace Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">تصفح المنتجات المحلية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold">منتج تقليدي محلي</h3>
                  <p className="text-sm text-muted-foreground mt-1">منتج يدوي حرفي من المنطقة</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-vivaccess-blue">150 درهم</span>
                    <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                      أضف إلى السلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="border border-amber-500 text-amber-500 px-6 py-2 rounded-md font-medium hover:bg-amber-500/5 transition-colors">
              عرض جميع المنتجات
            </button>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">قصص نجاح</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold mb-2">تعاونية النساء للمنتجات التقليدية</h3>
              <p className="text-sm text-muted-foreground">تمكنت مجموعة من النساء من تأسيس تعاونية ناجحة لإنتاج وتسويق المنتجات التقليدية المحلية.</p>
              <button className="mt-4 text-vivaccess-blue text-sm font-medium hover:underline">اقرأ المزيد</button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold mb-2">مشروع الزراعة المستدامة</h3>
              <p className="text-sm text-muted-foreground">تمكن أحمد من تطوير مشروع زراعة مستدامة باستخدام تقنيات توفير المياه، مما زاد من إنتاجيته.</p>
              <button className="mt-4 text-vivaccess-blue text-sm font-medium hover:underline">اقرأ المزيد</button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold mb-2">متجر إلكتروني للمنتجات المحلية</h3>
              <p className="text-sm text-muted-foreground">تمكنت فاطمة من إنشاء متجر إلكتروني لتسويق منتجات القرية التقليدية للعملاء في المدن الكبرى.</p>
              <button className="mt-4 text-vivaccess-blue text-sm font-medium hover:underline">اقرأ المزيد</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EconomicDevelopment;

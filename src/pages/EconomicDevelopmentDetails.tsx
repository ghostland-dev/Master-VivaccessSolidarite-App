
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ArrowLeft, ShoppingCart, CreditCard, Briefcase, TrendingUp, Building, Users } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const EconomicDevelopmentDetails = () => {
  return (
    <PageLayout 
      title="تفاصيل التنمية الاقتصادية" 
      subtitle="معلومات مفصلة عن خدمات التنمية الاقتصادية للمناطق الريفية"
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          to="/economic-development" 
          className="inline-flex items-center text-vivaccess-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>العودة إلى التنمية الاقتصادية</span>
        </Link>
      </div>

      {/* Detailed Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدمات التنمية الاقتصادية المتكاملة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="المتجر الإلكتروني للمنتجات المحلية"
              description="منصة لبيع وتسويق المنتجات الحرفية والزراعية المحلية إلى أسواق أوسع محلياً ودولياً"
              icon={ShoppingCart}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="برامج القروض الصغيرة"
              description="تمويل ميسر للمشاريع الصغيرة والمتوسطة مع برامج دعم وإرشاد"
              icon={CreditCard}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="بوابة فرص العمل"
              description="منصة لعرض الوظائف المتاحة وربط الباحثين عن عمل بالشركات وأصحاب الأعمال"
              icon={Briefcase}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="أكاديمية ريادة الأعمال"
              description="دورات وورش عمل لتطوير مهارات ريادة الأعمال وإدارة المشاريع"
              icon={TrendingUp}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="دعم وتطوير التعاونيات"
              description="خدمات استشارية وتقنية لتأسيس وتطوير التعاونيات المحلية"
              icon={Building}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="منصة الشبكات المهنية"
              description="ربط رواد الأعمال المحليين بالمستثمرين والخبراء والشركاء المحتملين"
              icon={Users}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Marketplace Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">المنتجات المميزة في السوق الإلكتروني</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            تصفح مجموعة من المنتجات الحرفية والتقليدية المميزة من مختلف المناطق الريفية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-amber-500/10"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">منتج حرفي</span>
                <h3 className="font-semibold mt-2">سجاد تقليدي أمازيغي</h3>
                <p className="text-sm text-muted-foreground mt-2">سجاد يدوي مصنوع باستخدام تقنيات تقليدية من منطقة الأطلس المتوسط</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-vivaccess-blue">1200 درهم</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">أضف إلى السلة</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-vivaccess-green/10"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-vivaccess-green/10 text-vivaccess-green px-2 py-1 rounded-full">منتج زراعي</span>
                <h3 className="font-semibold mt-2">زيت أركان عضوي</h3>
                <p className="text-sm text-muted-foreground mt-2">زيت أركان نقي ومعصور على البارد من تعاونية نسائية في منطقة سوس</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-vivaccess-blue">150 درهم</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">أضف إلى السلة</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-vivaccess-blue/10"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-vivaccess-blue/10 text-vivaccess-blue px-2 py-1 rounded-full">منتج خشبي</span>
                <h3 className="font-semibold mt-2">علبة خشبية منقوشة</h3>
                <p className="text-sm text-muted-foreground mt-2">علبة مجوهرات خشبية منقوشة يدوياً بزخارف تقليدية مغربية</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-vivaccess-blue">350 درهم</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">أضف إلى السلة</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-rose-500/10"></div>
              <div className="p-4">
                <span className="text-xs font-medium bg-rose-500/10 text-rose-500 px-2 py-1 rounded-full">منتج نسيجي</span>
                <h3 className="font-semibold mt-2">شال صوفي تقليدي</h3>
                <p className="text-sm text-muted-foreground mt-2">شال منسوج يدوياً من صوف الأغنام المحلية ومصبوغ بألوان طبيعية</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-vivaccess-blue">250 درهم</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">أضف إلى السلة</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-vivaccess-blue text-white px-6 py-2 rounded-md font-medium hover:bg-vivaccess-blue/90 transition-colors">
              تصفح جميع المنتجات
            </button>
          </div>
        </div>
      </section>
      
      {/* Funding Programs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">برامج التمويل والدعم</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">قروض المشاريع الصغيرة</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-blue mr-2"></div>
                  <span>قروض تصل إلى 50,000 درهم</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-blue mr-2"></div>
                  <span>فترة سداد مرنة تصل إلى 36 شهراً</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-blue mr-2"></div>
                  <span>معدل فائدة منخفض (3-5%)</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-blue mr-2"></div>
                  <span>خدمات استشارية مجانية</span>
                </li>
              </ul>
              <button className="w-full border border-vivaccess-blue text-vivaccess-blue py-2 rounded-md text-sm hover:bg-vivaccess-blue/5 transition-colors">
                تقديم طلب
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">منح التعاونيات</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-green mr-2"></div>
                  <span>منح تصل إلى 100,000 درهم</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-green mr-2"></div>
                  <span>لا تحتاج إلى سداد</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-green mr-2"></div>
                  <span>تدريب وإرشاد لمدة عام</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-vivaccess-green mr-2"></div>
                  <span>دعم في التسويق والمبيعات</span>
                </li>
              </ul>
              <button className="w-full border border-vivaccess-green text-vivaccess-green py-2 rounded-md text-sm hover:bg-vivaccess-green/5 transition-colors">
                تقديم طلب
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">استثمارات المشاريع الناشئة</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>تمويل يصل إلى 500,000 درهم</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>حصة ملكية في المشروع</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>إرشاد من خبراء ورواد أعمال</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>فرص للتوسع والنمو</span>
                </li>
              </ul>
              <button className="w-full border border-amber-500 text-amber-500 py-2 rounded-md text-sm hover:bg-amber-500/5 transition-colors">
                تقديم طلب
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EconomicDevelopmentDetails;

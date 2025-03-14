
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ArrowLeft, MessageCircle, Building, ShieldCheck, FileText, Users, Megaphone } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const CivicEngagementDetails = () => {
  return (
    <PageLayout 
      title="تفاصيل المشاركة المدنية" 
      subtitle="معلومات مفصلة عن خدمات المشاركة المدنية وتمكين المجتمعات الريفية"
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          to="/civic-engagement" 
          className="inline-flex items-center text-vivaccess-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>العودة إلى المشاركة المدنية</span>
        </Link>
      </div>

      {/* Detailed Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدمات المشاركة المدنية المتكاملة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="منصة النقاش المجتمعي"
              description="منصة رقمية للنقاش حول القضايا المحلية واتخاذ القرارات المجتمعية بشكل تشاركي"
              icon={MessageCircle}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="نظام رصد المشكلات"
              description="نظام متكامل للإبلاغ عن مشاكل البنية التحتية ومتابعتها مع الجهات المسؤولة"
              icon={Building}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="برامج التوعية الحقوقية"
              description="دورات وموارد تعليمية حول حقوق المواطنين والإجراءات القانونية والإدارية"
              icon={ShieldCheck}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="البوابة الحكومية"
              description="نقطة وصول موحدة للخدمات الحكومية مع شرح مفصل لكيفية الاستفادة منها"
              icon={FileText}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="منصة المبادرات المجتمعية"
              description="أدوات لتنظيم وإدارة الحملات والمبادرات المحلية وتنسيق جهود المتطوعين"
              icon={Users}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="نشرة الأخبار المحلية"
              description="نشرة إخبارية دورية للإعلان عن الأخبار والفعاليات المحلية الهامة"
              icon={Megaphone}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Active Community Initiatives */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">المبادرات المجتمعية النشطة</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="h-48 bg-vivaccess-blue/10 rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">حملة تنظيف وادي أوريكا</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">نشط</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  مبادرة مجتمعية لتنظيف ضفاف وادي أوريكا من النفايات وحماية النظام البيئي المحلي. 
                  تهدف الحملة إلى تعزيز الوعي البيئي وتحسين جودة المياه في الوادي.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-vivaccess-blue">35</div>
                    <p className="text-xs text-muted-foreground">متطوع</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-vivaccess-blue">3</div>
                    <p className="text-xs text-muted-foreground">قرى مشاركة</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-vivaccess-blue">5</div>
                    <p className="text-xs text-muted-foreground">كم تم تنظيفها</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-vivaccess-blue">80%</div>
                    <p className="text-xs text-muted-foreground">نسبة الإنجاز</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                    انضم للمبادرة
                  </button>
                  <button className="text-xs border border-vivaccess-blue text-vivaccess-blue px-3 py-1 rounded-full">
                    التبرع للمبادرة
                  </button>
                  <button className="text-xs border border-gray-300 text-muted-foreground px-3 py-1 rounded-full">
                    مشاركة
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">إعادة تأهيل المدرسة الابتدائية</h3>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">قريباً</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                مشروع لتجديد وتحسين البنية التحتية للمدرسة الابتدائية في قرية آيت عبد الله،
                بما في ذلك إضافة مكتبة ومختبر حاسوب.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-muted-foreground">الهدف: 50,000 درهم</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                  المزيد من التفاصيل
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">مشروع تشجير القرية</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">مستمر</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                مبادرة لزراعة 1000 شجرة في المناطق المحيطة بالقرى لمكافحة التصحر 
                وتحسين البيئة المحلية.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-muted-foreground">الإنجاز: 450 شجرة</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-vivaccess-green rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                  المزيد من التفاصيل
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-vivaccess-blue text-white px-6 py-2 rounded-md font-medium hover:bg-vivaccess-blue/90 transition-colors">
              عرض جميع المبادرات
            </button>
          </div>
        </div>
      </section>
      
      {/* Voting & Decision Making */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">التصويت واتخاذ القرارات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">استطلاعات الرأي الحالية</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">أولويات تطوير البنية التحتية للقرية</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>تحسين شبكة المياه</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vivaccess-blue rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>إصلاح الطرق</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vivaccess-blue rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>توسيع شبكة الكهرباء</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vivaccess-blue rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 text-xs border border-vivaccess-blue text-vivaccess-blue px-3 py-1 rounded-full">
                    شارك في التصويت
                  </button>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">موقع المركز الثقافي الجديد</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>وسط القرية</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vivaccess-green rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>بجانب المدرسة</span>
                        <span>40%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vivaccess-green rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 text-xs border border-vivaccess-blue text-vivaccess-blue px-3 py-1 rounded-full">
                    شارك في التصويت
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">آخر القرارات المجتمعية</h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium">تحديد جدول مواعيد توزيع المياه للري</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    تم اعتماد جدول زمني جديد لتوزيع مياه الري بين المزارعين بالتساوي.
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">تم التنفيذ</span>
                    <span className="text-xs text-muted-foreground ml-2">تاريخ القرار: 15 مايو 2023</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium">تنظيم السوق الأسبوعي</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    تم الاتفاق على نقل السوق الأسبوعي إلى موقع جديد وتحسين تنظيمه.
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">قيد التنفيذ</span>
                    <span className="text-xs text-muted-foreground ml-2">تاريخ القرار: 10 يونيو 2023</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">إنشاء لجنة إدارة المياه</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    تشكيل لجنة من أعضاء المجتمع لإدارة موارد المياه ومراقبة جودتها.
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">تم التنفيذ</span>
                    <span className="text-xs text-muted-foreground ml-2">تاريخ القرار: 25 أبريل 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CivicEngagementDetails;

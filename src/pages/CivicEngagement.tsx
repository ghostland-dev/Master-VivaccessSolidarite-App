
import React from 'react';
import PageLayout from '../components/PageLayout';
import { MessageCircle, Building, ShieldCheck, FileText, Users, Megaphone } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const CivicEngagement = () => {
  return (
    <PageLayout 
      title="المشاركة المدنية" 
      subtitle="تعزيز الديمقراطية المحلية وتمكين المجتمعات الريفية"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا في المشاركة المدنية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="منتدى المناقشة المحلية"
              description="منصة للنقاش حول القضايا المحلية واتخاذ القرارات المجتمعية"
              icon={MessageCircle}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="الإبلاغ عن مشاكل البنية التحتية"
              description="منصة للإبلاغ عن مشاكل المياه والطرق والمرافق العامة"
              icon={Building}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="التوعية بالحقوق المدنية"
              description="موارد تعليمية حول حقوق المواطنين والإجراءات القانونية"
              icon={ShieldCheck}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="دليل الخدمات الحكومية"
              description="دليل شامل للخدمات الحكومية وكيفية الوصول إليها"
              icon={FileText}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="تنظيم المبادرات المجتمعية"
              description="أدوات لتنظيم الحملات المحلية والأنشطة المجتمعية"
              icon={Users}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="الإعلانات المجتمعية"
              description="منصة لنشر الإعلانات والأخبار المحلية الهامة"
              icon={Megaphone}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Report Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">الإبلاغ عن المشكلات</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">نوع المشكلة</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option value="">اختر نوع المشكلة</option>
                <option value="water">مشكلة في المياه</option>
                <option value="electricity">مشكلة في الكهرباء</option>
                <option value="road">مشكلة في الطرق</option>
                <option value="waste">مشكلة في النفايات</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">الموقع</label>
              <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="أدخل الموقع" />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">وصف المشكلة</label>
              <textarea className="w-full border rounded-md px-3 py-2 h-32" placeholder="اشرح المشكلة بالتفصيل"></textarea>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">إرفاق صورة (اختياري)</label>
              <div className="border border-dashed rounded-md p-8 text-center">
                <p className="text-sm text-muted-foreground">اسحب وأفلت الصورة هنا أو انقر للتصفح</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-vivaccess-blue text-white px-6 py-2 rounded-md font-medium hover:bg-vivaccess-blue/90 transition-colors">
                إرسال البلاغ
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">المبادرات المجتمعية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-vivaccess-blue/10"></div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">حملة تنظيف الوادي</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">نشط</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">مبادرة لتنظيف وادي القرية من النفايات والحفاظ على البيئة المحلية.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">15 متطوع</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                    انضم للمبادرة
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-vivaccess-green/10"></div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">إعادة تأهيل المدرسة</h3>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">قريبًا</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">مشروع لتجديد مدرسة القرية وتحسين بيئة التعلم للطلاب.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">8 متطوعين</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                    انضم للمبادرة
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-rose-500/10"></div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">تشجير القرية</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">مستمر</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">مبادرة لزراعة الأشجار في أنحاء القرية لمكافحة التصحر.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">25 متطوع</span>
                  <button className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full">
                    انضم للمبادرة
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="border border-violet-600 text-violet-600 px-6 py-2 rounded-md font-medium hover:bg-violet-600/5 transition-colors">
              اقترح مبادرة جديدة
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CivicEngagement;

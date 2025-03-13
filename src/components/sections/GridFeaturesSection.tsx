
import React from 'react';
import { 
  Video,
  BookOpen,
  ShoppingCart,
  CreditCard,
  BarChart3,
  AlertTriangle,
  FileSpreadsheet,
  Building,
  Megaphone,
  Users,
  ShieldCheck,
  Droplets
} from 'lucide-react';

const GridFeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-green/10 text-vivaccess-green text-sm font-medium">
            المميزات
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            حلول شاملة للمجتمعات الريفية
          </h2>
          <p className="text-muted-foreground">
            توفر منصتنا العديد من الميزات المصممة لتحسين نوعية الحياة في القرى المعزولة.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <Video className="w-6 h-6 text-vivaccess-blue mb-4" />
            <h3 className="font-semibold mb-2">استشارات بالفيديو</h3>
            <p className="text-sm text-muted-foreground">الوصول إلى الأطباء المتخصصين عن بعد.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <BookOpen className="w-6 h-6 text-vivaccess-green mb-4" />
            <h3 className="font-semibold mb-2">دروس عبر الإنترنت</h3>
            <p className="text-sm text-muted-foreground">تعليم لجميع الأعمار والمستويات.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <ShoppingCart className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="font-semibold mb-2">سوق محلي</h3>
            <p className="text-sm text-muted-foreground">بيع وشراء المنتجات الحرفية.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <CreditCard className="w-6 h-6 text-violet-600 mb-4" />
            <h3 className="font-semibold mb-2">التمويل الصغير</h3>
            <p className="text-sm text-muted-foreground">الوصول إلى الخدمات المالية الأساسية.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <BarChart3 className="w-6 h-6 text-vivaccess-blue mb-4" />
            <h3 className="font-semibold mb-2">متابعة الموارد</h3>
            <p className="text-sm text-muted-foreground">إدارة محسنة للموارد المحلية.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <AlertTriangle className="w-6 h-6 text-rose-500 mb-4" />
            <h3 className="font-semibold mb-2">إنذارات المياه</h3>
            <p className="text-sm text-muted-foreground">مراقبة الجودة والتوافر.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <FileSpreadsheet className="w-6 h-6 text-vivaccess-green mb-4" />
            <h3 className="font-semibold mb-2">موارد تعليمية</h3>
            <p className="text-sm text-muted-foreground">مواد مكيفة مع السياق المحلي.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <Building className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="font-semibold mb-2">البنية التحتية</h3>
            <p className="text-sm text-muted-foreground">الإبلاغ عن مشاكل البنية التحتية.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <Megaphone className="w-6 h-6 text-violet-600 mb-4" />
            <h3 className="font-semibold mb-2">حملات محلية</h3>
            <p className="text-sm text-muted-foreground">تنظيم المبادرات المجتمعية.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <Users className="w-6 h-6 text-vivaccess-blue mb-4" />
            <h3 className="font-semibold mb-2">تدريب مجتمعي</h3>
            <p className="text-sm text-muted-foreground">تعزيز القدرات المحلية.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <ShieldCheck className="w-6 h-6 text-rose-500 mb-4" />
            <h3 className="font-semibold mb-2">حقوق المواطنين</h3>
            <p className="text-sm text-muted-foreground">معلومات عن الحقوق والإجراءات.</p>
          </div>
          <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
            <Droplets className="w-6 h-6 text-vivaccess-light-blue mb-4" />
            <h3 className="font-semibold mb-2">ري فعال</h3>
            <p className="text-sm text-muted-foreground">تقنيات لتوفير المياه.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridFeaturesSection;

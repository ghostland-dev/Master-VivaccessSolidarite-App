
import React from 'react';
import FeatureCard from '../FeatureCard';
import { 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Droplets, 
  MessageCircle,
  Users
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-green/10 text-vivaccess-green text-sm font-medium">
            خدماتنا
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            حلول مصممة خصيصًا للاحتياجات المحلية
          </h2>
          <p className="text-muted-foreground">
            نقدم مجموعة من الخدمات المصممة لتلبية الاحتياجات المحددة للمجتمعات الريفية المعزولة.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard 
            title="الطب عن بعد"
            description="استشارات عن بعد مع الأطباء المتخصصين والمتابعة الطبية للمرضى المزمنين."
            icon={Stethoscope}
            color="bg-vivaccess-blue"
            delay={100}
          />
          <FeatureCard 
            title="التعليم عن بعد"
            description="دروس عبر الإنترنت للطلاب والتدريب المهني للبالغين."
            icon={GraduationCap}
            color="bg-vivaccess-green"
            delay={200}
          />
          <FeatureCard 
            title="التنمية الاقتصادية"
            description="سوق للمنتجات المحلية والتمويل الصغير لرواد الأعمال."
            icon={ShoppingCart}
            color="bg-amber-500"
            delay={300}
          />
          <FeatureCard 
            title="إدارة موارد المياه"
            description="نظام إنذار لجودة المياه وتوافرها والتدريب على تقنيات الري."
            icon={Droplets}
            color="bg-vivaccess-light-blue"
            delay={400}
          />
          <FeatureCard 
            title="المشاركة المدنية"
            description="منتدى للنقاش حول القضايا المحلية وأداة للإبلاغ عن مشاكل البنية التحتية."
            icon={MessageCircle}
            color="bg-violet-600"
            delay={500}
          />
          <FeatureCard 
            title="التدريب المحلي"
            description="تدريب المستخدمين والدعم التقني المحلي لضمان استقلالية المجتمعات."
            icon={Users}
            color="bg-rose-500"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

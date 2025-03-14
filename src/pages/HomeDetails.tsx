
import React from 'react';
import PageLayout from '../components/PageLayout';
import { ArrowLeft, Home, Heart, BookOpen, TrendingUp, Droplets, Users } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const HomeDetails = () => {
  return (
    <PageLayout 
      title="تفاصيل المشروع" 
      subtitle="معلومات مفصلة عن مشروع VivAccess وخدماته المتكاملة للمناطق الريفية"
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-vivaccess-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>العودة إلى الرئيسية</span>
        </Link>
      </div>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">نظرة عامة على المشروع</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              يهدف مشروع VivAccess إلى تحسين نوعية الحياة في المناطق الريفية المعزولة من خلال توفير خدمات متكاملة
              في مجالات الصحة والتعليم والتنمية الاقتصادية وإدارة المياه والمشاركة المدنية.
            </p>
            
            <p className="text-lg mb-6">
              يعتمد المشروع على تكنولوجيا المعلومات والاتصالات للتغلب على تحديات العزلة الجغرافية،
              ويسعى إلى بناء قدرات المجتمعات المحلية لتمكينها من تحقيق التنمية المستدامة.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">رؤيتنا</h3>
                <p>
                  مناطق ريفية متصلة ومزدهرة تتمتع بفرص متكافئة للوصول إلى الخدمات الأساسية
                  والمشاركة في التنمية الاقتصادية والاجتماعية.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">مهمتنا</h3>
                <p>
                  تمكين المجتمعات الريفية من خلال توفير حلول تكنولوجية مبتكرة ومستدامة
                  تلبي احتياجاتهم وتحترم خصوصياتهم الثقافية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا الرئيسية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="الطب عن بعد"
              description="رعاية صحية عالية الجودة عن بعد للمناطق النائية"
              icon={Heart}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="التعليم عن بعد"
              description="فرص تعليمية متكافئة لجميع الفئات العمرية"
              icon={BookOpen}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="التنمية الاقتصادية"
              description="تعزيز الاقتصاد المحلي وخلق فرص عمل"
              icon={TrendingUp}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="إدارة المياه"
              description="حلول مستدامة لإدارة الموارد المائية"
              icon={Droplets}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="المشاركة المدنية"
              description="تعزيز الديمقراطية المحلية وتمكين المجتمعات"
              icon={Users}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="المراكز المجتمعية"
              description="نقاط اتصال فعلية في المناطق الريفية"
              icon={Home}
              color="bg-vivaccess-light-blue"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              to="/telemedecine"
              className="bg-vivaccess-blue text-white px-4 py-2 rounded-md hover:bg-vivaccess-blue/90 transition-colors"
            >
              الطب عن بعد
            </Link>
            <Link 
              to="/education"
              className="bg-vivaccess-green text-white px-4 py-2 rounded-md hover:bg-vivaccess-green/90 transition-colors"
            >
              التعليم
            </Link>
            <Link 
              to="/economic-development"
              className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-500/90 transition-colors"
            >
              التنمية الاقتصادية
            </Link>
            <Link 
              to="/water-management"
              className="bg-vivaccess-blue text-white px-4 py-2 rounded-md hover:bg-vivaccess-blue/90 transition-colors"
            >
              إدارة المياه
            </Link>
            <Link 
              to="/civic-engagement"
              className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-600/90 transition-colors"
            >
              المشاركة المدنية
            </Link>
          </div>
        </div>
      </section>
      
      {/* Impact Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">أثر المشروع</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-vivaccess-blue mb-2">25+</div>
              <p className="text-muted-foreground">قرية مستفيدة</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-vivaccess-green mb-2">10,000+</div>
              <p className="text-muted-foreground">شخص مستفيد</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-rose-500 mb-2">5,000+</div>
              <p className="text-muted-foreground">استشارة طبية</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">200+</div>
              <p className="text-muted-foreground">فرصة عمل جديدة</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">التحديات والحلول</h3>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="md:w-1/2">
                  <h4 className="font-medium text-red-500 mb-2">التحدي</h4>
                  <p className="text-sm">
                    محدودية الوصول إلى الخدمات الصحية في المناطق النائية.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-medium text-green-500 mb-2">الحل</h4>
                  <p className="text-sm">
                    تطبيق الطب عن بعد وتوفير معدات طبية متنقلة وتدريب مساعدين صحيين محليين.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="md:w-1/2">
                  <h4 className="font-medium text-red-500 mb-2">التحدي</h4>
                  <p className="text-sm">
                    نقص المعلمين والموارد التعليمية في المدارس الريفية.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-medium text-green-500 mb-2">الحل</h4>
                  <p className="text-sm">
                    توفير منصات التعلم عن بعد والمحتوى التعليمي القابل للتنزيل.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="md:w-1/2">
                  <h4 className="font-medium text-red-500 mb-2">التحدي</h4>
                  <p className="text-sm">
                    ندرة موارد المياه وسوء إدارتها في المناطق القاحلة.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-medium text-green-500 mb-2">الحل</h4>
                  <p className="text-sm">
                    تطبيق أنظمة مراقبة جودة المياه وتقنيات الري الذكية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeDetails;


import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Droplets, 
  MessageCircle,
  Video,
  BookOpen,
  CreditCard,
  BarChart3,
  Users,
  AlertTriangle,
  FileSpreadsheet,
  Building,
  Megaphone,
  ShieldCheck
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
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
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="stagger-animation">
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-blue/10 text-vivaccess-blue text-sm font-medium">
                  الطب عن بعد
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  الوصول إلى الرعاية الطبية عن بعد
                </h2>
                <p className="text-muted-foreground mb-8">
                  تتيح خدمة الطب عن بعد لسكان المناطق الريفية الوصول إلى استشارات طبية عالية الجودة دون الحاجة إلى قطع مسافات طويلة.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-vivaccess-blue flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">استشارات بالفيديو</h4>
                      <p className="text-sm text-muted-foreground">استشر الأطباء المتخصصين عبر مكالمة فيديو.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-vivaccess-blue flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">متابعة المرضى المزمنين</h4>
                      <p className="text-sm text-muted-foreground">مراقبة مستمرة ومخصصة للأمراض المزمنة.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-vivaccess-blue flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">تدريب العاملين الصحيين</h4>
                      <p className="text-sm text-muted-foreground">برامج تدريب مستمر للعاملين في الرعاية الصحية المحلية.</p>
                    </div>
                  </li>
                </ul>
                
                <button className="button-primary">
                  اكتشف الطب عن بعد
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-vivaccess-blue/5 to-vivaccess-green/5 rounded-3xl transform rotate-3 scale-95 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-vivaccess-blue/5 to-vivaccess-green/5 rounded-3xl transform -rotate-3 scale-95 opacity-70" />
                
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vivaccess-blue to-vivaccess-green" />
                  
                  <div className="p-1">
                    <div className="w-full aspect-video bg-gray-100 rounded-t-2xl overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                        alt="الطب عن بعد في العمل" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-vivaccess-blue flex items-center justify-center">
                              <Video className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">استشارة جارية</span>
                          </div>
                          <span className="text-sm px-2 py-1 bg-white/20 rounded-full backdrop-blur-md">25:18</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">استشارة طبية</h3>
                          <p className="text-sm text-muted-foreground">د. أمينة بنعلي - أخصائية قلب</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                          <img 
                            src="https://randomuser.me/api/portraits/women/44.jpg" 
                            alt="طبيب" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">معدل ضربات القلب</span>
                          <span>78 نبضة/دقيقة</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">ضغط الدم</span>
                          <span>125/85 ملم زئبق</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">درجة الحرارة</span>
                          <span>37.2 درجة مئوية</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <button className="button-secondary w-full">
                          الملف
                        </button>
                        <button className="button-ghost w-full border border-gray-200">
                          إنهاء
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grid Features */}
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
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vivaccess-blue to-vivaccess-green opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-vivaccess-light-blue/10 blur-3xl transform translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-vivaccess-light-green/10 blur-3xl transform -translate-x-1/3" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center stagger-animation">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-primary text-sm font-medium">
                انضم إلينا
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                معًا، نبني مستقبلًا أفضل للمجتمعات الريفية
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                تم تصميم منصتنا بالتعاون مع المجتمعات المحلية. انضم إلينا للمشاركة في هذه المبادرة والمساهمة في التنمية المستدامة للمناطق الريفية في المغرب.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="button-primary bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  سجل مجانًا
                </button>
                <button className="button-ghost text-gray-800 hover:bg-white/10 w-full sm:w-auto">
                  اتصل بنا
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

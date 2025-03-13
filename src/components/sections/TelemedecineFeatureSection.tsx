
import React from 'react';
import { Video } from 'lucide-react';

const TelemedecineFeatureSection: React.FC = () => {
  return (
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
  );
};

export default TelemedecineFeatureSection;


import React from 'react';

const CtaSection: React.FC = () => {
  return (
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
  );
};

export default CtaSection;

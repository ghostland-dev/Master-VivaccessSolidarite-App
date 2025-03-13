
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-vivaccess-blue to-vivaccess-green py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
            {subtitle && <p className="text-white/90 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </div>
        
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;


import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="bg-primary rounded-lg p-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 7L12 12L4 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-lg font-display font-bold text-primary">VivAccess</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              منصة رقمية لتحسين ظروف المعيشة والوصول إلى الخدمات الأساسية للسكان الريفيين المعزولين في جنوب شرق المغرب
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">الخدمات</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">الطب عن بعد</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">التعليم عن بعد</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">التنمية الاقتصادية</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">إدارة موارد المياه</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">المشاركة المدنية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">الدعم</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">مركز المساعدة</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">الدروس التعليمية</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">الموارد</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">التدريب</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">قانوني</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">شروط الاستخدام</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">الإشعارات القانونية</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">ملفات تعريف الارتباط</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 VivAccess. جميع الحقوق محفوظة.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">الشروط</Link></li>
              <li><Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">الخصوصية</Link></li>
              <li><Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">ملفات تعريف الارتباط</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

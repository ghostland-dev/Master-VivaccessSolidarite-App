
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="mb-6">
          <div className="text-6xl font-bold text-primary">404</div>
          <div className="h-1 w-16 bg-gradient-to-r from-vivaccess-blue to-vivaccess-green mx-auto my-4"></div>
        </div>
        <h1 className="text-2xl font-bold mb-4">عفوا! الصفحة غير موجودة</h1>
        <p className="text-muted-foreground mb-8">
          لا يمكننا العثور على الصفحة التي تبحث عنها. ربما تم تغيير عنوان URL أو إزالة الصفحة.
        </p>
        <Link 
          to="/" 
          className="bg-vivaccess-blue text-white px-6 py-3 rounded-md font-medium hover:bg-vivaccess-blue/90 transition-colors inline-block"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

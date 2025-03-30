
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { ShoppingCart, CreditCard, Briefcase, TrendingUp, Building, Users } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';
import { useEconomicData } from '../hooks/useServiceData';
import { economicService } from '../services/economicService';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';

const EconomicDevelopment = () => {
  const { data: products, isLoading, error } = useEconomicData.useProducts();
  const [purchasingProduct, setPurchasingProduct] = useState<number | null>(null);

  const handlePurchase = async (productId: number) => {
    setPurchasingProduct(productId);
    
    try {
      const result = await economicService.purchaseProduct(productId, 1);
      
      if (result.success) {
        toast({
          title: "تمت عملية الشراء بنجاح",
          description: `تم إضافة ${result.product.name} إلى سلة المشتريات الخاصة بك.`,
          variant: "default",
        });
      } else {
        toast({
          title: "فشلت عملية الشراء",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ في عملية الشراء",
        description: "حدث خطأ أثناء محاولة إتمام عملية الشراء",
        variant: "destructive",
      });
    } finally {
      setPurchasingProduct(null);
    }
  };

  return (
    <PageLayout 
      title="التنمية الاقتصادية" 
      subtitle="تعزيز الاقتصاد المحلي وخلق فرص عمل للمجتمعات الريفية"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا الاقتصادية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="سوق المنتجات المحلية"
              description="منصة رقمية لبيع المنتجات الحرفية والزراعية المحلية"
              icon={ShoppingCart}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="خدمات التمويل متناهي الصغر"
              description="قروض صغيرة وخدمات مالية للمشاريع الصغيرة"
              icon={CreditCard}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="فرص العمل"
              description="منصة لنشر فرص العمل المتاحة في المنطقة"
              icon={Briefcase}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="التدريب على ريادة الأعمال"
              description="دورات تدريبية لتنمية مهارات ريادة الأعمال والإدارة"
              icon={TrendingUp}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="التعاونيات المحلية"
              description="دعم إنشاء وتطوير التعاونيات المحلية"
              icon={Building}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="شبكات التواصل المهنية"
              description="ربط رواد الأعمال المحليين بالموارد والمستثمرين المحتملين"
              icon={Users}
              color="bg-vivaccess-light-blue"
            />
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/economic-development/details"
              className="inline-block bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-500/90 transition-colors"
            >
              عرض التفاصيل الكاملة
            </Link>
          </div>
        </div>
      </section>
      
      {/* Marketplace Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">تصفح المنتجات المحلية</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              حدث خطأ أثناء تحميل المنتجات. يرجى المحاولة مرة أخرى.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products && products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <span className="text-xs font-medium bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-semibold mt-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-vivaccess-blue">{product.price} درهم</span>
                      <Button
                        onClick={() => handlePurchase(product.id)}
                        disabled={purchasingProduct === product.id || product.inStock === 0}
                        className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full hover:bg-vivaccess-blue/90"
                      >
                        {purchasingProduct === product.id ? "جاري الإضافة..." : product.inStock === 0 ? "نفذت الكمية" : "أضف إلى السلة"}
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      متوفر: {product.inStock} قطعة
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border border-amber-500 text-amber-500 hover:bg-amber-500/5"
            >
              عرض جميع المنتجات
            </Button>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">قصص نجاح</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold mb-2">تعاونية النساء للمنتجات التقليدية</h3>
              <p className="text-sm text-muted-foreground">تمكنت مجموعة من النساء من تأسيس تعاونية ناجحة لإنتاج وتسويق المنتجات التقليدية المحلية.</p>
              <Button variant="link" className="mt-4 text-vivaccess-blue text-sm font-medium p-0 h-auto">
                اقرأ المزيد
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold mb-2">مشروع الزراعة المستدامة</h3>
              <p className="text-sm text-muted-foreground">تمكن أحمد من تطوير مشروع زراعة مستدامة باستخدام تقنيات توفير المياه، مما زاد من إنتاجيته.</p>
              <Button variant="link" className="mt-4 text-vivaccess-blue text-sm font-medium p-0 h-auto">
                اقرأ المزيد
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold mb-2">متجر إلكتروني للمنتجات المحلية</h3>
              <p className="text-sm text-muted-foreground">تمكنت فاطمة من إنشاء متجر إلكتروني لتسويق منتجات القرية التقليدية للعملاء في المدن الكبرى.</p>
              <Button variant="link" className="mt-4 text-vivaccess-blue text-sm font-medium p-0 h-auto">
                اقرأ المزيد
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EconomicDevelopment;

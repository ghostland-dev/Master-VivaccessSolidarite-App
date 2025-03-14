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

// Define proper interfaces for type safety
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: number;
  imageUrl?: string;
}

interface PurchaseResult {
  success: boolean;
  product?: Product;
  message?: string;
}

const EconomicDevelopment = () => {
  const { data: products, isLoading, error } = useEconomicData.useProducts();
  const [purchasingProduct, setPurchasingProduct] = useState<number | null>(null);

  const handlePurchase = async (productId: number) => {
    setPurchasingProduct(productId);
    
    try {
      const result: PurchaseResult = await economicService.purchaseProduct(productId, 1);
      
      if (result.success && result.product) {
        toast({
          title: "تمت عملية الشراء بنجاح",
          description: `تم إضافة ${result.product.name} إلى سلة المشتريات الخاصة بك.`,
          variant: "default",
        });
      } else {
        toast({
          title: "فشلت عملية الشراء",
          description: result.message || "حدث خطأ غير معروف",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        title: "خطأ في عملية الشراء",
        description: "حدث خطأ أثناء محاولة إتمام عملية الشراء",
        variant: "destructive",
      });
    } finally {
      setPurchasingProduct(null);
    }
  };

  // Render product card as a separate component for better organization
  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 bg-gray-200">
        {product.imageUrl && (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-full w-full object-cover"
          />
        )}
      </div>
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
            size="sm"
          >
            {purchasingProduct === product.id 
              ? "جاري الإضافة..." 
              : product.inStock === 0 
                ? "نفذت الكمية" 
                : "أضف إلى السلة"}
          </Button>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          متوفر: {product.inStock} قطعة
        </div>
      </div>
    </div>
  );

  // Extracted the loading state skeleton for reusability
  const ProductSkeleton = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
      <Skeleton className="h-48 w-full mb-4" />
      <Skeleton className="h-6 w-24 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-8 w-24" />
      </div>
      <Skeleton className="h-4 w-20 mt-2" />
    </div>
  );

  // Success story card as a reusable component
  const SuccessStoryCard = ({ 
    title, 
    description 
  }: { 
    title: string; 
    description: string 
  }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Button variant="link" className="mt-4 text-vivaccess-blue text-sm font-medium p-0 h-auto">
        اقرأ المزيد
      </Button>
    </div>
  );

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
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">
                حدث خطأ أثناء تحميل المنتجات.
              </div>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="border border-vivaccess-blue text-vivaccess-blue hover:bg-vivaccess-blue/5"
              >
                إعادة المحاولة
              </Button>
            </div>
          ) : !products || products.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              لا توجد منتجات متاحة حاليًا.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
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
            <SuccessStoryCard
              title="تعاونية النساء للمنتجات التقليدية"
              description="تمكنت مجموعة من النساء من تأسيس تعاونية ناجحة لإنتاج وتسويق المنتجات التقليدية المحلية."
            />
            
            <SuccessStoryCard
              title="مشروع الزراعة المستدامة"
              description="تمكن أحمد من تطوير مشروع زراعة مستدامة باستخدام تقنيات توفير المياه، مما زاد من إنتاجيته."
            />
            
            <SuccessStoryCard
              title="متجر إلكتروني للمنتجات المحلية"
              description="تمكنت فاطمة من إنشاء متجر إلكتروني لتسويق منتجات القرية التقليدية للعملاء في المدن الكبرى."
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EconomicDevelopment;

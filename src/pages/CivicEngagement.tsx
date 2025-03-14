
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { MessageCircle, Building, ShieldCheck, FileText, Users, Megaphone } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { useCivicData } from '../hooks/useServiceData';
import { civicService } from '../services/civicService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const CivicEngagement = () => {
  const navigate = useNavigate();
  const { data: initiatives, isLoading, error } = useCivicData.useInitiatives();
  const [issueType, setIssueType] = useState<'water' | 'electricity' | 'road' | 'waste' | 'other'>('water');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleJoinInitiative = async (initiativeId: number) => {
    try {
      // In a real app, you'd get the user's name from a form or auth context
      const volunteerName = "متطوع جديد";
      const result = await civicService.joinInitiative(initiativeId, volunteerName);
      
      if (result.success) {
        toast({
          title: "تم الانضمام بنجاح",
          description: result.message,
          variant: "default",
        });
      } else {
        toast({
          title: "فشل الانضمام",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء محاولة الانضمام للمبادرة",
        variant: "destructive",
      });
    }
  };
  
  const handleReportIssue = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!location || !description) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await civicService.reportIssue(
        issueType,
        location,
        description,
        'medium' // default priority
      );
      
      if (result.success) {
        toast({
          title: "تم تسجيل البلاغ بنجاح",
          description: result.message,
          variant: "default",
        });
        
        // Reset form
        setIssueType('water');
        setLocation('');
        setDescription('');
      } else {
        toast({
          title: "فشل تسجيل البلاغ",
          description: "حدث خطأ أثناء محاولة تسجيل البلاغ",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ غير متوقع",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout 
      title="المشاركة المدنية" 
      subtitle="تعزيز الديمقراطية المحلية وتمكين المجتمعات الريفية"
    >
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا في المشاركة المدنية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="منتدى المناقشة المحلية"
              description="منصة للنقاش حول القضايا المحلية واتخاذ القرارات المجتمعية"
              icon={MessageCircle}
              color="bg-violet-600"
            />
            <FeatureCard 
              title="الإبلاغ عن مشاكل البنية التحتية"
              description="منصة للإبلاغ عن مشاكل المياه والطرق والمرافق العامة"
              icon={Building}
              color="bg-amber-500"
            />
            <FeatureCard 
              title="التوعية بالحقوق المدنية"
              description="موارد تعليمية حول حقوق المواطنين والإجراءات القانونية"
              icon={ShieldCheck}
              color="bg-rose-500"
            />
            <FeatureCard 
              title="دليل الخدمات الحكومية"
              description="دليل شامل للخدمات الحكومية وكيفية الوصول إليها"
              icon={FileText}
              color="bg-vivaccess-green"
            />
            <FeatureCard 
              title="تنظيم المبادرات المجتمعية"
              description="أدوات لتنظيم الحملات المحلية والأنشطة المجتمعية"
              icon={Users}
              color="bg-vivaccess-blue"
            />
            <FeatureCard 
              title="الإعلانات المجتمعية"
              description="منصة لنشر الإعلانات والأخبار المحلية الهامة"
              icon={Megaphone}
              color="bg-vivaccess-light-blue"
            />
          </div>
        </div>
      </section>
      
      {/* Report Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">الإبلاغ عن المشكلات</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <form onSubmit={handleReportIssue} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="issueType" className="block text-sm font-medium">نوع المشكلة</label>
                <Select
                  value={issueType}
                  onValueChange={(value) => setIssueType(value as any)}
                >
                  <SelectTrigger id="issueType" className="w-full">
                    <SelectValue placeholder="اختر نوع المشكلة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water">مشكلة في المياه</SelectItem>
                    <SelectItem value="electricity">مشكلة في الكهرباء</SelectItem>
                    <SelectItem value="road">مشكلة في الطرق</SelectItem>
                    <SelectItem value="waste">مشكلة في النفايات</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium">الموقع</label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="أدخل الموقع"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium">وصف المشكلة</label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="اشرح المشكلة بالتفصيل"
                  className="h-32"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">إرفاق صورة (اختياري)</label>
                <div className="border border-dashed rounded-md p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <p className="text-sm text-muted-foreground">اسحب وأفلت الصورة هنا أو انقر للتصفح</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-vivaccess-blue text-white hover:bg-vivaccess-blue/90"
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال البلاغ"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Community Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">المبادرات المجتمعية</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden p-4">
                  <Skeleton className="h-40 w-full mb-4" />
                  <div className="flex justify-between items-start mb-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              حدث خطأ أثناء تحميل المبادرات. يرجى المحاولة مرة أخرى.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives && initiatives.map((initiative) => (
                <div key={initiative.id} className="border rounded-lg overflow-hidden">
                  <div className="h-40 bg-vivaccess-blue/10"></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{initiative.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full 
                        ${initiative.status === 'active' ? 'bg-green-100 text-green-800' : 
                          initiative.status === 'upcoming' ? 'bg-amber-100 text-amber-800' : 
                          'bg-blue-100 text-blue-800'}`}
                      >
                        {initiative.status === 'active' ? 'نشط' : 
                         initiative.status === 'upcoming' ? 'قريبًا' : 'مستمر'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{initiative.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{initiative.volunteersCount} متطوع</span>
                      <Button 
                        onClick={() => handleJoinInitiative(initiative.id)}
                        className="text-xs bg-vivaccess-blue text-white px-3 py-1 rounded-full hover:bg-vivaccess-blue/90"
                        disabled={initiative.status === 'completed'}
                      >
                        انضم للمبادرة
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border border-violet-600 text-violet-600 hover:bg-violet-600/5"
              onClick={() => {
                toast({
                  title: "قريبًا",
                  description: "ستتمكن قريبًا من اقتراح مبادرات جديدة.",
                  variant: "default",
                });
                navigate("/civic-engagement/details");
              }}
            >
              اقترح مبادرة جديدة
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CivicEngagement;

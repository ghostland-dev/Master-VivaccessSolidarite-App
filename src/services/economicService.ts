
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl?: string;
  sellerName: string;
  inStock: number;
}

interface Loan {
  id: number;
  amount: number;
  purpose: string;
  duration: number; // in months
  interestRate: number;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
}

// Sample data
const products: Product[] = [
  {
    id: 1,
    name: "سجاد تقليدي أمازيغي",
    category: "منتج حرفي",
    price: 1200,
    description: "سجاد يدوي مصنوع باستخدام تقنيات تقليدية من منطقة الأطلس المتوسط",
    sellerName: "تعاونية النساء للمنتجات التقليدية",
    inStock: 5
  },
  {
    id: 2,
    name: "زيت أركان عضوي",
    category: "منتج زراعي",
    price: 150,
    description: "زيت أركان نقي ومعصور على البارد من تعاونية نسائية في منطقة سوس",
    sellerName: "تعاونية أركان للنساء",
    inStock: 20
  },
  {
    id: 3,
    name: "علبة خشبية منقوشة",
    category: "منتج خشبي",
    price: 350,
    description: "علبة مجوهرات خشبية منقوشة يدوياً بزخارف تقليدية مغربية",
    sellerName: "محمد الحرفي",
    inStock: 8
  },
  {
    id: 4,
    name: "شال صوفي تقليدي",
    category: "منتج نسيجي",
    price: 250,
    description: "شال منسوج يدوياً من صوف الأغنام المحلية ومصبوغ بألوان طبيعية",
    sellerName: "تعاونية صناعة النسيج التقليدي",
    inStock: 12
  }
];

const loans: Loan[] = [];

export const economicService = {
  getProducts: () => {
    return Promise.resolve(products);
  },
  
  getProductById: (id: number) => {
    const product = products.find(p => p.id === id);
    return Promise.resolve(product);
  },
  
  getProductsByCategory: (category: string) => {
    const filteredProducts = products.filter(p => p.category === category);
    return Promise.resolve(filteredProducts);
  },
  
  applyForLoan: (amount: number, purpose: string, duration: number) => {
    const newLoan: Loan = {
      id: Date.now(),
      amount,
      purpose,
      duration,
      interestRate: 0.04, // 4% default interest rate
      status: 'pending'
    };
    
    loans.push(newLoan);
    return Promise.resolve(newLoan);
  },
  
  purchaseProduct: (productId: number, quantity: number = 1) => {
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1 || products[productIndex].inStock < quantity) {
      return Promise.resolve({ success: false, message: "المنتج غير متوفر بالكمية المطلوبة" });
    }
    
    // Update stock
    products[productIndex].inStock -= quantity;
    
    return Promise.resolve({ 
      success: true, 
      message: "تمت عملية الشراء بنجاح",
      product: products[productIndex],
      quantity
    });
  }
};

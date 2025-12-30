import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ApplicationProps {
  fabricImage: string;
}

export function Applications({ fabricImage }: ApplicationProps) {
  return (
    <div className="space-y-16">
      {/* Section Header: Stationery */}
      <div className="border-b-2 border-[#C9A35A] pb-4">
        <h2 className="text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
          المطبوعات الرسمية
        </h2>
        <p className="opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
          Official Stationery
        </p>
      </div>

      {/* Business Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>بطاقة الأعمال</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Business Card</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            بطاقة أعمال فاخرة تحمل هوية العلامة وبيانات التواصل، تُعزز الموثوقية في التعاملات التجارية
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مقاس: 9×5 سم (قياس قياسي)</li>
            <li>• ورق مطفي فاخر 350 جرام</li>
            <li>• طباعة وجهين مع تذهيب</li>
            <li>• حواف مستديرة (اختياري)</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          {/* Front Side */}
          <div className="bg-[#1A2840] rounded-xl p-8 shadow-2xl border border-[#C9A35A]/20">
            <div className="flex flex-col items-center gap-4">
              <Logo variant="primary" size="medium" />
              <div className="text-center">
                <p className="text-[#C9A35A] text-xl mb-1" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
                  اباتشي للأقمشة الرجالية
                </p>
                <p className="text-white/60 text-xs" style={{ fontFamily: 'Playfair Display, serif' }}>
                  APACHE MEN'S FABRICS
                </p>
              </div>
            </div>
          </div>
          
          {/* Back Side */}
          <div className="bg-white rounded-xl p-6 shadow-2xl border-2 border-[#1A2840]">
            <div className="space-y-4">
              <div className="border-b border-[#C9A35A]/30 pb-3">
                <p className="text-[#1A2840] text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  محمد العتيبي
                </p>
                <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  مدير المبيعات
                </p>
              </div>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A35A]">☎</span>
                  <span className="text-[#1A2840]" dir="ltr">+966 50 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A35A]">@</span>
                  <span className="text-[#1A2840]">info@apache.sa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A35A]">🌐</span>
                  <span className="text-[#1A2840]">www.apache.sa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Letterhead */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[#1A2840]">
              <Logo variant="navy" size="small" />
              <div className="text-left">
                <p className="text-[#1A2840] text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  أباتشي للأقمشة الرجالية
                </p>
                <p className="text-xs opacity-60" style={{ fontFamily: 'Playfair Display, serif' }}>
                  APACHE MEN'S FABRICS
                </p>
              </div>
            </div>
            <div className="space-y-3 min-h-[200px]">
              <p className="text-xs opacity-40" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                [محتوى الخطاب الرسمي]
              </p>
              <div className="space-y-1 text-xs opacity-30" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                <p>_________________</p>
                <p>_________________</p>
                <p>_________________</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C9A35A]/30 text-xs opacity-60 text-center" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              الرياض • +966 50 123 4567 • info@apache.sa • www.apache.sa
            </div>
          </div>
        </div>
        
        <div className="space-y-4 order-1 lg:order-2">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>ورق الخطابات</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Official Letterhead</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            ورق رسمي للمراسلات التجارية يحمل شعار العلامة في الترويسة والتذييل
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مقاس: A4 (21×29.7 سم)</li>
            <li>• ورق أبيض فاخر 100 جرام</li>
            <li>• ترويسة بالشعار وبيانات الاتصال</li>
            <li>• تذييل بالمعلومات الأساسية</li>
          </ul>
        </div>
      </div>

      {/* Section Header: Packaging */}
      <div className="border-b-2 border-[#C9A35A] pb-4 pt-8">
        <h2 className="text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
          تطبيقات التغليف
        </h2>
        <p className="opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
          Packaging Applications
        </p>
      </div>

      {/* Shopping Bags */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>أكياس التسوق</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Shopping Bags</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            أكياس فاخرة بألوان الهوية تُعزز تجربة العميل وتترك انطباعاً مميزاً
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مقاس كبير: 35×45 سم</li>
            <li>• مقاس متوسط: 25×35 سم</li>
            <li>• ورق كرافت ممتاز بوزن 200 جرام</li>
            <li>• طباعة ذهبية بالحفر (Hot Stamping)</li>
            <li>• يد حمل من شريط كحلي مجدول</li>
          </ul>
        </div>
        
        <div className="bg-[#1A2840] rounded-2xl p-12 shadow-2xl">
          <div className="bg-[#0f1824] rounded-xl p-8 border-2 border-[#C9A35A]/20">
            <div className="flex flex-col items-center gap-6">
              <Logo variant="primary" size="large" />
              <div className="text-center">
                <p className="text-[#C9A35A] text-2xl mb-1" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
                  أباتشي
                </p>
                <p className="text-white/60 text-xs" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  للأقمشة الرجالية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="bg-gradient-to-br from-[#1A2840] to-[#0f1824] rounded-2xl p-12 shadow-2xl">
            <div className="bg-[#C9A35A] rounded-xl p-8 flex flex-col items-center gap-4">
              <Logo variant="navy" size="large" />
              <div className="w-full h-px bg-[#1A2840]/20" />
              <p className="text-[#1A2840] text-center text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 600 }}>
                هدية فاخرة من أباتشي
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 order-1 lg:order-2">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>صناديق الهدايا</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Gift Boxes</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            صناديق فاخرة لتغليف الأقمشة كهدايا مميزة، تعكس قيمة المنتج ورقي العلامة
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مقاسات متعددة حسب نوع القماش</li>
            <li>• كرتون مقوى فاخر</li>
            <li>• طباعة خارجية بالألوان الرسمية</li>
            <li>• تبطين داخلي بورق حريري</li>
            <li>• شريط ذهبي للربط</li>
          </ul>
        </div>
      </div>

      {/* Fabric Label */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>ليبل القماش</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Fabric Label</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            قطعة قماشية فاخرة تُخاط داخل الثوب، تحمل شعار العلامة بتطريز ذهبي على خلفية كحلية
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مقاس: 4×2 سم</li>
            <li>• قماش ساتان ممتاز</li>
            <li>• تطريز ذهبي بارز</li>
            <li>• يُخاط في الجزء الداخلي من الثوب</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#C9A35A] to-[#B8924A] rounded-2xl p-8 shadow-2xl">
            <div className="bg-[#1A2840] rounded-lg px-6 py-4 inline-flex items-center gap-4">
              <Logo variant="primary" size="small" />
              <div className="border-r border-[#C9A35A] h-12" />
              <div className="text-right">
                <p className="text-[#C9A35A] text-lg" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  أباتشي
                </p>
                <p className="text-white/70 text-xs" style={{ fontFamily: 'Playfair Display, serif' }}>
                  APACHE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tag */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-64 bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center justify-between border-2 border-[#C9A35A]/30">
                <Logo variant="navy" size="small" />
                <div className="text-center space-y-2">
                  <p className="text-[#1A2840] text-lg" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                    أباتشي
                  </p>
                  <div className="h-px w-full bg-[#C9A35A]/30" />
                  <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    قماش سوبر 120
                  </p>
                  <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    صناعة إيطالية
                  </p>
                  <div className="pt-2">
                    <p className="text-[#C9A35A] text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                      999 ريال
                    </p>
                  </div>
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#C9A35A]" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 order-1 lg:order-2">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>بطاقة المنتج</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Product Tag</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            بطاقة أنيقة تُعلق على القماش تحتوي على معلومات المنتج والسعر
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مقاس: 8×12 سم</li>
            <li>• كرتون مطفي 300 جرام</li>
            <li>• ثقب علوي مع خيط ذهبي</li>
            <li>• طباعة فاخرة على الوجهين</li>
          </ul>
        </div>
      </div>

      {/* Section Header: Digital Applications */}
      <div className="border-b-2 border-[#C9A35A] pb-4 pt-8">
        <h2 className="text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
          التطبيقات الرقمية
        </h2>
        <p className="opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
          Digital Applications
        </p>
      </div>

      {/* Social Media & Digital */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Profile */}
        <div className="space-y-4">
          <h3 className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
            صورة الملف الشخصي
          </h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
            Profile Picture
          </p>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-[#1A2840] flex items-center justify-center shadow-xl border-4 border-white">
              <Logo variant="primary" size="medium" />
            </div>
          </div>
          <p className="text-xs opacity-60 text-center" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            للاستخدام في منصات التواصل الاجتماعي
          </p>
        </div>

        {/* Email Signature */}
        <div className="space-y-4">
          <h3 className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
            التوقيع البريدي
          </h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
            Email Signature
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 pb-3 border-b border-[#C9A35A]/30">
              <Logo variant="navy" size="small" />
              <div>
                <p className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  محمد العتيبي
                </p>
                <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  مدير المبيعات
                </p>
              </div>
            </div>
            <div className="pt-3 space-y-1 text-xs opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              <p>📧 info@apache.sa</p>
              <p>📱 +966 50 123 4567</p>
            </div>
          </div>
          <p className="text-xs opacity-60 text-center" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            لرسائل البريد الإلكتروني الرسمية
          </p>
        </div>

        {/* Digital Ads */}
        <div className="space-y-4">
          <h3 className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
            الإعلانات الرقمية
          </h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
            Digital Ads
          </p>
          <div className="bg-gradient-to-br from-[#1A2840] to-[#0f1824] rounded-xl p-6 shadow-xl">
            <div className="text-center space-y-3">
              <Logo variant="primary" size="small" />
              <p className="text-[#C9A35A] text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                تشكيلة جديدة
              </p>
              <p className="text-white text-xs opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                أقمشة إيطالية فاخرة
              </p>
            </div>
          </div>
          <p className="text-xs opacity-60 text-center" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            للحملات الإعلانية الرقمية
          </p>
        </div>
      </div>

      {/* Section Header: Pattern */}
      <div className="border-b-2 border-[#C9A35A] pb-4 pt-8">
        <h2 className="text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
          النمط والزخرفة
        </h2>
        <p className="opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
          Brand Pattern
        </p>
      </div>

      {/* Brand Pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>باترن الهوية</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Identity Pattern</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            نمط متكرر مستوحى من عناصر الشعار والخطوط الهندسية، يُستخدم في خلفيات التصاميم وتبطين الصناديق
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• مستوحى من نسيج الأقمشة</li>
            <li>• خطوط هندسية متداخلة</li>
            <li>• بألوان الهوية الرسمية</li>
            <li>• قابل للتكرار بجميع الاتجاهات</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
          <div 
            className="w-full h-64 rounded-xl"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                #1A2840,
                #1A2840 10px,
                #C9A35A 10px,
                #C9A35A 11px,
                transparent 11px,
                transparent 20px
              ), repeating-linear-gradient(
                -45deg,
                #1A2840,
                #1A2840 10px,
                #C9A35A 10px,
                #C9A35A 11px,
                transparent 11px,
                transparent 20px
              )`,
              opacity: 0.15
            }}
          />
          <p className="text-xs text-center mt-4 opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            مثال على نمط متكرر للاستخدام في الخلفيات
          </p>
        </div>
      </div>

      {/* Section Header: Signage */}
      <div className="border-b-2 border-[#C9A35A] pb-4 pt-8">
        <h2 className="text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
          اللافتات والإرشادات
        </h2>
        <p className="opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
          Signage & Wayfinding
        </p>
      </div>

      {/* Store Signage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="bg-gradient-to-b from-[#0f1824] to-[#1A2840] rounded-2xl p-12 shadow-2xl">
            <div className="bg-[#1A2840] rounded-xl p-8 border-2 border-[#C9A35A] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#C9A35A] opacity-5"></div>
              <div className="relative flex flex-col items-center gap-4">
                <Logo variant="primary" size="large" />
                <div className="text-center">
                  <p className="text-[#C9A35A] text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                    أباتشي
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    للأقمشة الرجالية الفاخرة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 order-1 lg:order-2">
          <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>اللوحة الخارجية</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Store Front Sign</p>
          <p className="opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            لافتة خارجية مضيئة أو محفورة تعكس فخامة العلامة وتجذب انتباه العملاء
          </p>
          <ul className="space-y-2 text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <li>• إضاءة LED خلفية بالألوان الرسمية</li>
            <li>• حروف بارزة من الاستانلس المذهب</li>
            <li>• خلفية كحلية مطفية</li>
            <li>• شعار بارز ومضيء</li>
            <li>• مقاومة للعوامل الجوية</li>
          </ul>
        </div>
      </div>

      {/* Interior Signage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#1A2840] flex items-center justify-center">
              <span className="text-[#C9A35A] text-xl">🏷️</span>
            </div>
            <div>
              <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                لافتات الأقسام
              </h4>
              <p className="text-xs opacity-60" style={{ fontFamily: 'Playfair Display, serif' }}>
                Section Signs
              </p>
            </div>
          </div>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            لوحات إرشادية داخل المتجر لتوجيه العملاء لأقسام الأقمشة المختلفة
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#1A2840] flex items-center justify-center">
              <span className="text-[#C9A35A] text-xl">📋</span>
            </div>
            <div>
              <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                لوحات الأسعار
              </h4>
              <p className="text-xs opacity-60" style={{ fontFamily: 'Playfair Display, serif' }}>
                Price Displays
              </p>
            </div>
          </div>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            عرض الأسعار والعروض بتصميم متناسق مع الهوية البصرية
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#1A2840] flex items-center justify-center">
              <span className="text-[#C9A35A] text-xl">🎁</span>
            </div>
            <div>
              <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                ملصقات الحملات
              </h4>
              <p className="text-xs opacity-60" style={{ fontFamily: 'Playfair Display, serif' }}>
                Campaign Stickers
              </p>
            </div>
          </div>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            ملصقات للعروض الموسمية والحملات الترويجية
          </p>
        </div>
      </div>

      {/* Stamp/Seal */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 mt-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h3 className="text-2xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>الختم الرسمي</h3>
            <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Official Stamp</p>
          </div>
          
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Logo variant="navy" size="small" />
            </div>
            <div className="bg-[#1A2840] rounded-xl p-8 shadow-lg">
              <Logo variant="primary" size="small" />
            </div>
            <div className="bg-[#C9A35A] rounded-xl p-8 shadow-lg">
              <Logo variant="white" size="small" />
            </div>
          </div>
          
          <p className="opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            يُستخدم الشعار بنسخة مسطحة (لون واحد) للأختام الرسمية، الفواتير، وختم الشمع
          </p>
        </div>
      </div>
    </div>
  );
}
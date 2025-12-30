import { Logo } from './Logo';

export function LogoVariations() {
  return (
    <div className="space-y-8">
      {/* Primary Logo on Navy Background */}
      <div className="space-y-4">
        <h3 className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>الشعار الأساسي - Primary Logo</h3>
        <div className="bg-[#1A2840] p-12 rounded-lg flex flex-col items-center justify-center min-h-[300px]">
          <Logo variant="primary" size="large" />
          <div className="mt-6 text-center">
            <p className="text-[#C9A35A] text-3xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
              أباتشي
            </p>
            <p className="text-white text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              للأقمشة الرجالية
            </p>
            <p className="text-[#C9A35A] text-xs mt-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
              APACHE MEN'S FABRICS
            </p>
          </div>
        </div>
        <p className="text-sm opacity-70 text-center" style={{ fontFamily: 'Tajawal, sans-serif' }}>
          الاستخدام الأساسي على الخلفيات الداكنة
        </p>
      </div>

      {/* Logo Variations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* White Logo on Navy */}
        <div className="space-y-3">
          <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>نسخة بيضاء</h4>
          <div className="bg-[#1A2840] p-8 rounded-lg flex items-center justify-center min-h-[200px]">
            <Logo variant="white" size="medium" />
          </div>
          <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            للاستخدام على الخلفيات الداكنة جداً
          </p>
        </div>

        {/* Gold Logo on White */}
        <div className="space-y-3">
          <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>نسخة ذهبية</h4>
          <div className="bg-white border-2 border-gray-100 p-8 rounded-lg flex items-center justify-center min-h-[200px]">
            <Logo variant="primary" size="medium" />
          </div>
          <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            للاستخدام على الخلفيات الفاتحة
          </p>
        </div>

        {/* Navy Logo on Gold */}
        <div className="space-y-3">
          <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>نسخة كحلية</h4>
          <div className="bg-[#C9A35A] p-8 rounded-lg flex items-center justify-center min-h-[200px]">
            <Logo variant="navy" size="medium" />
          </div>
          <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            للاستخدام على الخلفيات الذهبية
          </p>
        </div>

        {/* Small Size */}
        <div className="space-y-3">
          <h4 className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>حجم صغير</h4>
          <div className="bg-white border-2 border-gray-100 p-8 rounded-lg flex items-center justify-center min-h-[200px]">
            <Logo variant="navy" size="small" />
          </div>
          <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            للاستخدام في التطبيقات الصغيرة (أيقونات، أختام)
          </p>
        </div>
      </div>

      {/* Safe Space Guidelines */}
      <div className="space-y-4 mt-8">
        <h3 className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif' }}>المساحة الآمنة - Clear Space</h3>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-lg flex items-center justify-center">
          <div className="relative">
            <Logo variant="navy" size="large" />
            {/* Safe space guides */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-[#C9A35A]" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-[#C9A35A]" />
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 h-px w-8 bg-[#C9A35A]" />
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-px w-8 bg-[#C9A35A]" />
            
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs text-[#C9A35A] whitespace-nowrap" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              X
            </div>
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-xs text-[#C9A35A]" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              X
            </div>
          </div>
        </div>
        <p className="text-sm opacity-70 text-center" style={{ fontFamily: 'Tajawal, sans-serif' }}>
          يجب ترك مسافة خالية حول الشعار تعادل (X) لضمان الوضوح والتأثير البصري
        </p>
      </div>
    </div>
  );
}

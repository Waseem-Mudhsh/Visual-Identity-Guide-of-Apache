export function Typography() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Arabic Typography */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-[#C9A35A]">
          <h3 className="text-2xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>الخط العربي</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>Arabic Typography</p>
        </div>
        
        <div className="space-y-4">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs opacity-50 mb-2">Font Family</p>
            <p className="text-xl mb-4" style={{ fontFamily: 'Tajawal, sans-serif' }}>Tajawal</p>
            
            <div className="space-y-3 mt-6">
              <div>
                <p className="text-xs opacity-50 mb-1">Light - 300</p>
                <p className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 300 }}>
                  أباتشي للأقمشة الرجالية
                </p>
              </div>
              
              <div>
                <p className="text-xs opacity-50 mb-1">Regular - 400</p>
                <p className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 400 }}>
                  أباتشي للأقمشة الرجالية
                </p>
              </div>
              
              <div>
                <p className="text-xs opacity-50 mb-1">Bold - 700</p>
                <p className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  أباتشي للأقمشة الرجالية
                </p>
              </div>
              
              <div>
                <p className="text-xs opacity-50 mb-1">Extra Bold - 800</p>
                <p className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
                  أباتشي للأقمشة الرجالية
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-[#1A2840] text-white rounded-lg">
            <p className="text-4xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
              أباتشي
            </p>
            <p className="opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              يُستخدم للعناوين الرئيسية والشعارات
            </p>
          </div>
        </div>
      </div>

      {/* English Typography */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-[#C9A35A]">
          <h3 className="text-2xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>الخط الإنجليزي</h3>
          <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>English Typography</p>
        </div>
        
        <div className="space-y-4">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs opacity-50 mb-2">Font Family</p>
            <p className="text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Playfair Display</p>
            
            <div className="space-y-3 mt-6">
              <div>
                <p className="text-xs opacity-50 mb-1">Regular - 400</p>
                <p className="text-2xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
                  Apache Men's Fabrics
                </p>
              </div>
              
              <div>
                <p className="text-xs opacity-50 mb-1">Semi Bold - 600</p>
                <p className="text-2xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                  Apache Men's Fabrics
                </p>
              </div>
              
              <div>
                <p className="text-xs opacity-50 mb-1">Bold - 700</p>
                <p className="text-2xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                  Apache Men's Fabrics
                </p>
              </div>
              
              <div>
                <p className="text-xs opacity-50 mb-1">Black - 900</p>
                <p className="text-2xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}>
                  Apache Men's Fabrics
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-[#C9A35A] text-[#1A2840] rounded-lg">
            <p className="text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}>
              APACHE
            </p>
            <p className="opacity-80" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
              Used for main headings and logo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Logo } from './components/Logo';
import { LogoVariations } from './components/LogoVariations';
import { ColorPalette } from './components/ColorPalette';
import { Typography } from './components/Typography';
import { Applications } from './components/Applications';

type Section = 'cover' | 'about' | 'concept' | 'logo' | 'colors' | 'typography' | 'applications';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('cover');

  const sections = [
    { id: 'cover' as Section, name: 'الغلاف', nameEn: 'Cover' },
    { id: 'about' as Section, name: 'عن العلامة', nameEn: 'Brand Concept' },
    { id: 'concept' as Section, name: 'مفهوم الشعار', nameEn: 'Logo Concept' },
    { id: 'logo' as Section, name: 'الشعار', nameEn: 'Logo Variations' },
    { id: 'colors' as Section, name: 'الألوان', nameEn: 'Color Palette' },
    { id: 'typography' as Section, name: 'الخطوط', nameEn: 'Typography' },
    { id: 'applications' as Section, name: 'التطبيقات', nameEn: 'Applications' }
  ];

  const fabricImage = "https://images.unsplash.com/photo-1718184021018-d2158af6b321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjB0ZXh0aWxlfGVufDF8fHx8MTc2NzA2ODc2NHww&ixlib=rb-4.1.0&q=80&w=1080";

  const renderContent = () => {
    switch (currentSection) {
      case 'cover':
        return (
          <div className="min-h-screen flex items-center justify-center bg-[#1A2840] text-white">
            <div className="text-center space-y-8 p-8">
              <Logo variant="primary" size="large" />
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                  دليل الهوية البصرية
                </h1>
                <p className="text-xl md:text-2xl text-[#C9A35A]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>
                  Visual Identity Guide
                </p>
                <div className="pt-4">
                  <p className="text-2xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                    أباتشي للأقمشة الرجالية
                  </p>
                  <p className="text-lg opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Apache Men's Fabrics
                  </p>
                </div>
                <div className="pt-8">
                  <p className="text-[#C9A35A] text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    إصدار 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                عن العلامة
              </h2>
              <p className="text-xl opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                Brand Concept
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#C9A35A]/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-[#C9A35A]/30">
                    <div className="w-12 h-12 rounded-full bg-[#C9A35A] flex items-center justify-center">
                      <span className="text-white text-2xl">👁</span>
                    </div>
                    <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                      الرؤية
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    الريادة في تقديم أجود الأقمشة الرجالية (ثياب سعودية) التي تجمع بين فخامة التراث وعصرية التصميم.
                  </p>
                </div>
              </div>

              <div className="bg-[#1A2840] text-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-[#C9A35A]/30">
                    <div className="w-12 h-12 rounded-full bg-[#C9A35A] flex items-center justify-center">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                      الرسالة
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    تقديم تجربة "أباتشي" الفريدة التي تعكس القوة، الدقة، والأصالة في كل خيط.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C9A35A]/10 to-[#1A2840]/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl text-center" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  القيم الأساسية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#1A2840] flex items-center justify-center mb-3">
                      <span className="text-[#C9A35A] text-2xl">💎</span>
                    </div>
                    <p className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>الفخامة</p>
                    <p className="text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                      جودة استثنائية في كل تفصيلة
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#1A2840] flex items-center justify-center mb-3">
                      <span className="text-[#C9A35A] text-2xl">⚡</span>
                    </div>
                    <p className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>القوة</p>
                    <p className="text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                      تصاميم تعكس شخصية قوية
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#1A2840] flex items-center justify-center mb-3">
                      <span className="text-[#C9A35A] text-2xl">🎨</span>
                    </div>
                    <p className="text-xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>الأصالة</p>
                    <p className="text-sm opacity-70" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                      متجذرة في التراث السعودي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'concept':
        return (
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                مفهوم الشعار
              </h2>
              <p className="text-xl opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                Logo Concept
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A2840] to-[#0f1824] rounded-2xl p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <Logo variant="primary" size="large" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl mb-3" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                      الفكرة التصميمية
                    </h3>
                    <p className="text-lg leading-relaxed opacity-90" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                      تم استلهام الشعار من حرف (A) المدمج مع خطوط هندسية تجريدية ترمز إلى "نسيج الأقمشة" والترابط، 
                      مع لمسة حادة توحي باسم "أباتشي" (السهم أو الريشة التجريدية).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl mb-4 pb-3 border-b border-[#C9A35A]/30" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  العناصر الرمزية
                </h4>
                <ul className="space-y-3" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A] text-xl flex-shrink-0">▲</span>
                    <span>حرف A يمثل الحرف الأول من اسم العلامة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A] text-xl flex-shrink-0">═</span>
                    <span>الخطوط الأفقية ترمز لنسيج الأقمشة المتداخلة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A] text-xl flex-shrink-0">➤</span>
                    <span>السهم العلوي يمثل القوة والتوجه نحو التميز</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl mb-4 pb-3 border-b border-[#C9A35A]/30" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  السمات التصميمية
                </h4>
                <ul className="space-y-3" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A]">✓</span>
                    <span>بسيط وسهل التذكر</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A]">✓</span>
                    <span>عصري ومواكب للتطور</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A]">✓</span>
                    <span>فاخر ويعكس الجودة العالية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A]">✓</span>
                    <span>قابل للتطبيق على مختلف الخامات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A35A]">✓</span>
                    <span>واضح في جميع الأحجام</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'logo':
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                الشعار المعتمد
              </h2>
              <p className="text-xl opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                Official Logo & Variations
              </p>
            </div>
            <LogoVariations />
          </div>
        );

      case 'colors':
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                الألوان الرسمية
              </h2>
              <p className="text-xl opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                Official Color Palette
              </p>
            </div>
            <ColorPalette />
            
            <div className="bg-gradient-to-r from-[#1A2840] via-[#C9A35A] to-[#1A2840] h-2 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl mb-4 text-center" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  مثال على الاستخدام
                </h3>
                <div className="bg-[#1A2840] rounded-lg p-6 text-center">
                  <p className="text-[#C9A35A] text-2xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
                    أباتشي
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    للأقمشة الرجالية
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl mb-4 text-center" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                  تطبيق بديل
                </h3>
                <div className="bg-[#C9A35A] rounded-lg p-6 text-center">
                  <p className="text-[#1A2840] text-2xl mb-2" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 800 }}>
                    أباتشي
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    للأقمشة الرجالية
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'typography':
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                الخطوط المعتمدة
              </h2>
              <p className="text-xl opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                Typography System
              </p>
            </div>
            <Typography />
          </div>
        );

      case 'applications':
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 900 }}>
                تطبيقات الهوية
              </h2>
              <p className="text-xl opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>
                Brand Applications
              </p>
            </div>
            <Applications fabricImage={fabricImage} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Navigation */}
      {currentSection !== 'cover' && (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Logo variant="navy" size="small" />
                <div>
                  <p className="text-sm" style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}>
                    دليل الهوية البصرية
                  </p>
                  <p className="text-xs opacity-60" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    أباتشي 2026
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                      currentSection === section.id
                        ? 'bg-[#1A2840] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{ fontFamily: 'Tajawal, sans-serif' }}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Content */}
      <main className={currentSection === 'cover' ? '' : 'py-12 px-4'}>
        {renderContent()}
      </main>

      {/* Cover Page Navigation */}
      {currentSection === 'cover' && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setCurrentSection('about')}
            className="px-8 py-3 bg-[#C9A35A] text-[#1A2840] rounded-full shadow-xl hover:bg-[#B8924A] transition-all"
            style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 700 }}
          >
            ابدأ التصفح →
          </button>
        </div>
      )}

      {/* Page Navigation */}
      {currentSection !== 'cover' && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={() => {
              const currentIndex = sections.findIndex(s => s.id === currentSection);
              if (currentIndex > 0) {
                setCurrentSection(sections[currentIndex - 1].id);
              }
            }}
            disabled={sections.findIndex(s => s.id === currentSection) === 0}
            className={`px-6 py-2 rounded-full shadow-lg transition-all ${
              sections.findIndex(s => s.id === currentSection) === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#1A2840] text-white hover:bg-[#0f1824]'
            }`}
            style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 600 }}
          >
            ← السابق
          </button>
          
          <button
            onClick={() => {
              const currentIndex = sections.findIndex(s => s.id === currentSection);
              if (currentIndex < sections.length - 1) {
                setCurrentSection(sections[currentIndex + 1].id);
              }
            }}
            disabled={sections.findIndex(s => s.id === currentSection) === sections.length - 1}
            className={`px-6 py-2 rounded-full shadow-lg transition-all ${
              sections.findIndex(s => s.id === currentSection) === sections.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#C9A35A] text-[#1A2840] hover:bg-[#B8924A]'
            }`}
            style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 600 }}
          >
            التالي →
          </button>
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

interface ColorItemProps {
  name: string;
  nameEn: string;
  hex: string;
  rgb: string;
  description: string;
}

function ColorItem({ name, nameEn, hex, rgb, description }: ColorItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div 
        className="w-full h-48 rounded-lg shadow-lg"
        style={{ backgroundColor: hex }}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold" style={{ fontFamily: 'Tajawal, sans-serif' }}>{name}</h3>
        <p className="text-sm opacity-70" style={{ fontFamily: 'Playfair Display, serif' }}>{nameEn}</p>
        <div className="flex gap-4 text-sm">
          <span className="font-mono">{hex}</span>
          <span className="font-mono opacity-70">{rgb}</span>
        </div>
        <p className="text-sm opacity-80" style={{ fontFamily: 'Tajawal, sans-serif' }}>{description}</p>
      </div>
    </div>
  );
}

export function ColorPalette() {
  const colors: ColorItemProps[] = [
    {
      name: 'الكحلي الملكي',
      nameEn: 'Deep Navy',
      hex: '#1A2840',
      rgb: 'RGB(26, 40, 64)',
      description: 'يرمز للثقة والوقار والرسامة - القيم الأساسية للرجل السعودي'
    },
    {
      name: 'الذهبي الميتاليك',
      nameEn: 'Metallic Gold',
      hex: '#C9A35A',
      rgb: 'RGB(201, 163, 90)',
      description: 'يرمز للفخامة والجودة العالية والتميز'
    },
    {
      name: 'الأبيض النقي',
      nameEn: 'Pure White',
      hex: '#FFFFFF',
      rgb: 'RGB(255, 255, 255)',
      description: 'للخلفيات والمساحات المريحة للعين'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {colors.map((color) => (
        <ColorItem key={color.hex} {...color} />
      ))}
    </div>
  );
}

interface LogoProps {
  variant?: 'primary' | 'white' | 'navy';
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ variant = 'primary', size = 'medium' }: LogoProps) {
  const sizeMap = {
    small: 60,
    medium: 100,
    large: 150
  };
  
  const dimension = sizeMap[size];
  
  const colorMap = {
    primary: '#C9A35A',
    white: '#FFFFFF',
    navy: '#1A2840'
  };
  
  const color = colorMap[variant];
  
  // Font size based on logo size
  const fontSizeMap = {
    small: '6px',
    medium: '10px',
    large: '14px'
  };
  
  const fontSize = fontSizeMap[size];
  
  return (
    <svg 
      width={dimension} 
      height={dimension} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for contrast */}
      {variant === 'white' && (
        <circle cx="50" cy="50" r="48" fill="#1A2840" opacity="0.1" />
      )}
      
      {/* Main A shape with geometric pattern */}
      <path 
        d="M50 20 L70 70 L62 70 L58 58 L42 58 L38 70 L30 70 L50 20Z" 
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
      
      {/* Horizontal bar of A with textile pattern */}
      <path 
        d="M44 52 L56 52 L54 46 L46 46 Z" 
        fill={variant === 'navy' ? '#C9A35A' : '#1A2840'}
      />
      
      {/* Geometric accent lines representing fabric weave */}
      <line x1="35" y1="75" x2="45" y2="75" stroke={color} strokeWidth="2" />
      <line x1="55" y1="75" x2="65" y2="75" stroke={color} strokeWidth="2" />
      <line x1="40" y1="79" x2="60" y2="79" stroke={color} strokeWidth="1.5" />
      
      {/* Abstract arrow/feather element (Apache reference) */}
      <path 
        d="M50 15 L48 20 L52 20 Z" 
        fill={color}
      />
      
      {/* APACHE text */}
      <text 
        x="50" 
        y="92" 
        textAnchor="middle" 
        fill={color}
        fontFamily="Playfair Display, serif"
        fontSize={fontSize}
        fontWeight="700"
        letterSpacing="1"
      >
        APACHE
      </text>
    </svg>
  );
}
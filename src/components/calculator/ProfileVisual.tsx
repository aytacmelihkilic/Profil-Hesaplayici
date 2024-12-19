import React from 'react';

interface ProfileVisualProps {
  type: string;
}

const UProfileSVG = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto">
    <g stroke="black" fill="none" strokeWidth="2">
      <path d="M 50,50 L 50,150 L 250,150 L 250,50" />
      <path d="M 50,50 L 70,50" strokeDasharray="5,5" />
      <path d="M 230,50 L 250,50" strokeDasharray="5,5" />
      
      {/* Ölçü çizgileri */}
      <path d="M 40,50 L 40,150" strokeWidth="1" />
      <path d="M 35,50 L 45,50" strokeWidth="1" />
      <path d="M 35,150 L 45,150" strokeWidth="1" />
      <text x="20" y="100" className="text-sm">A</text>
      
      <path d="M 50,160 L 250,160" strokeWidth="1" />
      <path d="M 50,155 L 50,165" strokeWidth="1" />
      <path d="M 250,155 L 250,165" strokeWidth="1" />
      <text x="140" y="175" className="text-sm">B</text>
      
      {/* Et kalınlığı */}
      <path d="M 60,70 L 80,70" strokeWidth="1" />
      <text x="65" y="65" className="text-sm">t</text>
    </g>
  </svg>
);

const BoxProfileSVG = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto">
    <g stroke="black" fill="none" strokeWidth="2">
      <rect x="50" y="50" width="200" height="100" />
      <rect x="70" y="70" width="160" height="60" strokeDasharray="5,5" />
      
      {/* Ölçü çizgileri */}
      <path d="M 40,50 L 40,150" strokeWidth="1" />
      <path d="M 35,50 L 45,50" strokeWidth="1" />
      <path d="M 35,150 L 45,150" strokeWidth="1" />
      <text x="20" y="100" className="text-sm">H</text>
      
      <path d="M 50,160 L 250,160" strokeWidth="1" />
      <path d="M 50,155 L 50,165" strokeWidth="1" />
      <path d="M 250,155 L 250,165" strokeWidth="1" />
      <text x="140" y="175" className="text-sm">W</text>
      
      {/* Et kalınlığı */}
      <path d="M 60,60 L 60,80" strokeWidth="1" />
      <text x="65" y="70" className="text-sm">t</text>
    </g>
  </svg>
);

const PipeProfileSVG = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto">
    <g stroke="black" fill="none" strokeWidth="2">
      <circle cx="150" cy="100" r="70" />
      <circle cx="150" cy="100" r="60" strokeDasharray="5,5" />
      
      {/* Çap ölçüsü */}
      <path d="M 80,100 L 220,100" strokeWidth="1" />
      <path d="M 80,95 L 80,105" strokeWidth="1" />
      <path d="M 220,95 L 220,105" strokeWidth="1" />
      <text x="140" y="90" className="text-sm">D</text>
      
      {/* Et kalınlığı */}
      <path d="M 150,30 L 150,40" strokeWidth="1" />
      <text x="155" y="35" className="text-sm">t</text>
    </g>
  </svg>
);

const CornerProfileSVG = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto">
    <g stroke="black" fill="none" strokeWidth="2">
      <path d="M 50,50 L 50,150 L 150,150" />
      
      {/* Ölçü çizgileri */}
      <path d="M 40,50 L 40,150" strokeWidth="1" />
      <path d="M 35,50 L 45,50" strokeWidth="1" />
      <path d="M 35,150 L 45,150" strokeWidth="1" />
      <text x="20" y="100" className="text-sm">A</text>
      
      <path d="M 50,160 L 150,160" strokeWidth="1" />
      <path d="M 50,155 L 50,165" strokeWidth="1" />
      <path d="M 150,155 L 150,165" strokeWidth="1" />
      <text x="90" y="175" className="text-sm">B</text>
      
      {/* Et kalınlığı */}
      <path d="M 60,60 L 60,80" strokeWidth="1" />
      <text x="65" y="70" className="text-sm">t</text>
    </g>
  </svg>
);

const TProfileSVG = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto">
    <g stroke="black" fill="none" strokeWidth="2">
      <path d="M 100,50 L 200,50 M 150,50 L 150,150" />
      
      {/* Ölçü çizgileri */}
      <path d="M 100,40 L 200,40" strokeWidth="1" />
      <path d="M 100,35 L 100,45" strokeWidth="1" />
      <path d="M 200,35 L 200,45" strokeWidth="1" />
      <text x="140" y="35" className="text-sm">W</text>
      
      <path d="M 160,50 L 160,150" strokeWidth="1" />
      <path d="M 155,50 L 165,50" strokeWidth="1" />
      <path d="M 155,150 L 165,150" strokeWidth="1" />
      <text x="170" y="100" className="text-sm">H</text>
      
      {/* Et kalınlığı */}
      <path d="M 140,60 L 160,60" strokeWidth="1" />
      <text x="145" y="75" className="text-sm">t</text>
    </g>
  </svg>
);

const visuals: Record<string, React.FC> = {
  uProfil: UProfileSVG,
  kutuProfil: BoxProfileSVG,
  boru: PipeProfileSVG,
  kosebent: CornerProfileSVG,
  tProfil: TProfileSVG
};

export function ProfileVisual({ type }: ProfileVisualProps) {
  const Visual = visuals[type];
  
  if (!Visual) {
    return null;
  }
  
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <Visual />
    </div>
  );
}
import React from 'react';
import { Scale } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-500 text-white py-6 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Scale className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Profil Hesaplayıcı</h1>
            <p className="text-red-100">Hızlı ve Kolay Profil Ağırlığı Hesaplama</p>
          </div>
        </div>
        <div className="text-right text-red-100">
          <p className="font-medium">v1.0.0</p>
          <p className="text-sm">Profesyonel Hesaplama Aracı</p>
        </div>
      </div>
    </header>
  );
}
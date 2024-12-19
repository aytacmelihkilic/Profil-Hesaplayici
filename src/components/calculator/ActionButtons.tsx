import React from 'react';
import { Calculator } from 'lucide-react';

interface ActionButtonsProps {
  onCalculate: () => void;
  onReset: () => void;
}

export function ActionButtons({ onCalculate, onReset }: ActionButtonsProps) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onCalculate}
        className="flex-1 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Hesapla
      </button>
      <button
        onClick={onReset}
        className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Sıfırla
      </button>
    </div>
  );
}
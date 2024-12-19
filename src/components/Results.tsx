import React from 'react';
import { Box, Trash2 } from 'lucide-react';
import { materials } from '../utils/materials';

interface Calculation {
  diameter: number;
  length: number;
  material: string;
  quantity: number;
  weight: number;
}

interface ResultsProps {
  calculations: Calculation[];
  onRemoveCalculation: (index: number) => void;
  onClearAll: () => void;
}

export function Results({ calculations, onRemoveCalculation, onClearAll }: ResultsProps) {
  const totalWeight = calculations.reduce((sum, calc) => sum + calc.weight, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Box className="w-5 h-5" />
          Hesaplamalarım
        </h2>
        {calculations.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-red-500 hover:text-red-600 flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Tümünü Sil
          </button>
        )}
      </div>

      <div className="space-y-4">
        {calculations.map((calc, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg relative">
            <button
              onClick={() => onRemoveCalculation(index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Çap</p>
                <p className="font-medium">{calc.diameter} mm</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Uzunluk</p>
                <p className="font-medium">{calc.length} mm</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Materyal</p>
                <p className="font-medium">{materials[calc.material].name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Adet</p>
                <p className="font-medium">{calc.quantity}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">Ağırlık</p>
                <p className="font-medium text-blue-600">{calc.weight.toFixed(3)} kg</p>
              </div>
            </div>
          </div>
        ))}

        {calculations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Henüz hesaplama yapılmadı
          </div>
        )}

        {calculations.length > 0 && (
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Toplam Ağırlık:</span>
              <span className="text-xl font-bold text-blue-600">{totalWeight.toFixed(3)} kg</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
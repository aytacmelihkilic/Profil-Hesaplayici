import React from 'react';
import { Calculator as CalcIcon, Circle, Type, Minus, Plus } from 'lucide-react';
import { materials } from '../utils/materials';
import { MaterialInfo } from './MaterialInfo';

interface CalculatorProps {
  diameter: string;
  length: string;
  material: string;
  quantity: number;
  onDiameterChange: (value: string) => void;
  onLengthChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
  onQuantityChange: (value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
}

export function Calculator({
  diameter,
  length,
  material,
  quantity,
  onDiameterChange,
  onLengthChange,
  onMaterialChange,
  onQuantityChange,
  onCalculate,
  onReset
}: CalculatorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <CalcIcon className="w-5 h-5" />
        Hesaplama Verileri
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mil Çapı (mm)</label>
          <div className="relative">
            <input
              type="number"
              value={diameter}
              onChange={(e) => onDiameterChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Çap giriniz"
            />
            <Circle className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mil Uzunluğu (mm)</label>
          <div className="relative">
            <input
              type="number"
              value={length}
              onChange={(e) => onLengthChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Uzunluk giriniz"
            />
            <Type className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Materyal</label>
          <select
            value={material}
            onChange={(e) => onMaterialChange(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.entries(materials).map(([key, { name }]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
          <MaterialInfo material={materials[material]} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adet</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              <Minus className="w-5 h-5" />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onCalculate}
            className="flex-1 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <CalcIcon className="w-5 h-5" />
            Hesapla
          </button>
          <button
            onClick={onReset}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
}
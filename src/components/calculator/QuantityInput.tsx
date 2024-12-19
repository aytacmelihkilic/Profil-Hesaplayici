import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantityInputProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
}

export function QuantityInput({ quantity, onQuantityChange }: QuantityInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Adet
      </label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Minus className="w-5 h-5" />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-20 text-center px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          min="1"
        />
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
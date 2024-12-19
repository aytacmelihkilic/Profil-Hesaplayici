import React from 'react';
import { Trash2 } from 'lucide-react';
import { materials } from '../../utils/materials';
import { Calculation } from '../../types';

interface ResultCardProps {
  calculation: Calculation;
  onRemove: () => void;
}

export function ResultCard({ calculation, onRemove }: ResultCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg relative">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
      >
        <Trash2 className="w-4 h-4" />
      </button>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Çap</p>
          <p className="font-medium">{calculation.diameter} mm</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Uzunluk</p>
          <p className="font-medium">{calculation.length} mm</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Materyal</p>
          <p className="font-medium">{materials[calculation.material].name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Adet</p>
          <p className="font-medium">{calculation.quantity}</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-600">Ağırlık</p>
          <p className="font-medium text-blue-600">{calculation.weight.toFixed(3)} kg</p>
        </div>
      </div>
    </div>
  );
}
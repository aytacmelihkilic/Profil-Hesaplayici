import React from 'react';
import { Info } from 'lucide-react';
import { Material } from '../utils/materials';

interface MaterialInfoProps {
  material?: Material;
}

export function MaterialInfo({ material }: MaterialInfoProps) {
  if (!material) {
    return null; // Return nothing if no material is provided
  }

  return (
    <div className="mt-2 bg-gray-50 rounded-lg p-4">
      <div className="flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-gray-900">{material.name} Özellikleri</h3>
          <p className="text-sm text-gray-600 mt-1">{material.description}</p>
          <ul className="mt-2 space-y-1">
            {material.properties.map((property, index) => (
              <li key={index} className="text-sm text-gray-700">
                • {property}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
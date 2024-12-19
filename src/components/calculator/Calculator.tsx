import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { ProfileVisual } from './ProfileVisual';
import { MaterialSelect } from './MaterialSelect';
import { DynamicFields } from './DynamicFields';
import { QuantityInput } from './QuantityInput';
import { profileTypes } from '../../utils/profileTypes';
import { materials } from '../../utils/materials';
import { MaterialInfo } from '../MaterialInfo';

interface CalculatorProps {
  profileType: string;
  onCalculate: (result: {
    type: string;
    dimensions: Record<string, number>;
    material: string;
    quantity: number;
    weight: number;
  }) => void;
}

export function Calculator({ profileType, onCalculate }: CalculatorProps) {
  const [dimensions, setDimensions] = useState<Record<string, string>>({});
  const [material, setMaterial] = useState('steel');
  const [quantity, setQuantity] = useState(1);

  const handleCalculate = () => {
    const profile = profileTypes[profileType];
    const fields = profile.getDynamicFields?.(dimensions) || profile.fields;
    
    // Checkbox değerini boolean'a çevir
    const numericDimensions = Object.entries(dimensions).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: fields.find(f => f.name === key)?.type === 'checkbox' 
        ? value === 'true'
        : parseFloat(value)
    }), {});

    // Sadece sayısal alanları kontrol et
    const hasAllFields = fields.every(field => 
      field.type === 'checkbox' || 
      (numericDimensions[field.name] && numericDimensions[field.name] > 0)
    );

    if (!hasAllFields) {
      alert('Lütfen tüm ölçüleri giriniz');
      return;
    }

    const weight = profile.calculate(numericDimensions, materials[material].density);

    onCalculate({
      type: profileType,
      dimensions: numericDimensions,
      material,
      quantity,
      weight: weight * quantity
    });

    // Reset form
    setDimensions({});
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <CalcIcon className="w-5 h-5" />
        Hesaplama Verileri
      </h2>

      <ProfileVisual type={profileType} />
      
      <div className="space-y-4">
        <DynamicFields
          profileType={profileTypes[profileType]}
          values={dimensions}
          onChange={(name, value) => setDimensions(prev => ({ ...prev, [name]: value }))}
        />

        <MaterialSelect
          value={material}
          onChange={setMaterial}
        />

        <MaterialInfo material={materials[material]} />

        <QuantityInput
          quantity={quantity}
          onQuantityChange={setQuantity}
        />

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleCalculate}
            className="flex-1 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <CalcIcon className="w-4 h-4" />
            Hesapla
          </button>
          <button
            onClick={() => {
              setDimensions({});
              setQuantity(1);
            }}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
}
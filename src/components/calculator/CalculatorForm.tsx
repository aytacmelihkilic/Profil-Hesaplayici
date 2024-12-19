import React from 'react';
import { Circle, Type } from 'lucide-react';
import { InputField } from '../ui/InputField';
import { MaterialSelect } from './MaterialSelect';
import { QuantityInput } from './QuantityInput';
import { ActionButtons } from './ActionButtons';
import { MaterialInfo } from './MaterialInfo';
import { materials } from '../../utils/materials';

interface CalculatorFormProps {
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

export function CalculatorForm({
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
}: CalculatorFormProps) {
  return (
    <div className="space-y-4">
      <InputField
        label="Mil Çapı (mm)"
        value={diameter}
        onChange={onDiameterChange}
        placeholder="Çap giriniz"
        icon={Circle}
      />

      <InputField
        label="Mil Uzunluğu (mm)"
        value={length}
        onChange={onLengthChange}
        placeholder="Uzunluk giriniz"
        icon={Type}
      />

      <MaterialSelect
        value={material}
        onChange={onMaterialChange}
      />

      <MaterialInfo material={materials[material]} />

      <QuantityInput
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />

      <ActionButtons
        onCalculate={onCalculate}
        onReset={onReset}
      />
    </div>
  );
}
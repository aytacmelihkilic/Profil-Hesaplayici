import React from 'react';
import { InputField } from '../ui/InputField';
import { CheckboxField } from '../ui/CheckboxField';
import { ProfileType } from '../../types';

interface DynamicFieldsProps {
  profileType: ProfileType;
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

export function DynamicFields({ profileType, values, onChange }: DynamicFieldsProps) {
  // Dinamik alanları al
  const fields = profileType.getDynamicFields?.(values) || profileType.fields;

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        field.type === 'checkbox' ? (
          <CheckboxField
            key={field.name}
            label={field.label}
            checked={values[field.name] === 'true'}
            onChange={(checked) => onChange(field.name, checked.toString())}
          />
        ) : (
          <InputField
            key={field.name}
            label={`${field.label} ${field.unit ? `(${field.unit})` : ''}`}
            value={values[field.name] || ''}
            onChange={(value) => onChange(field.name, value)}
            placeholder={field.placeholder}
          />
        )
      ))}
    </div>
  );
}
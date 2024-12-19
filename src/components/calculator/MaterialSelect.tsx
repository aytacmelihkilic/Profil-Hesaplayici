import React from 'react';
import { materials } from '../../utils/materials';

interface MaterialSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function MaterialSelect({ value, onChange }: MaterialSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Materyal
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {Object.entries(materials).map(([key, { name }]) => (
          <option key={key} value={key}>{name}</option>
        ))}
      </select>
    </div>
  );
}
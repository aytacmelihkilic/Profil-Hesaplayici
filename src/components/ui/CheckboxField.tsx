import React from 'react';

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function CheckboxField({ label, checked, onChange }: CheckboxFieldProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <label className="ml-2 block text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
}
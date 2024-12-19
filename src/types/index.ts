import { LucideIcon } from 'lucide-react';

export interface ProfileField {
  name: string;
  label: string;
  unit: string;
  placeholder: string;
  type?: 'number' | 'checkbox';
}

export interface ProfileType {
  name: string;
  icon: LucideIcon;
  fields: ProfileField[];
  calculate: (dimensions: Record<string, number>, density: number) => number;
  getDynamicFields?: (values: Record<string, string>) => ProfileField[];
}
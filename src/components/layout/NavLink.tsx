import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  Icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavLink({ Icon, label, isActive, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200
        ${isActive 
          ? 'bg-red-500 text-white shadow-lg scale-105' 
          : 'bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:scale-105'
        }`}
    >
      <Icon className={`w-8 h-8 mb-2 ${isActive ? 'animate-bounce' : ''}`} />
      <span className="text-sm font-medium text-center">{label}</span>
    </button>
  );
}
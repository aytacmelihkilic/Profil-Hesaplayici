import React from 'react';
import { NavLink } from './NavLink';
import { profileTypes } from '../../utils/profileTypes';

export function Navigation({ activeProfile, onProfileChange }: {
  activeProfile: string;
  onProfileChange: (profile: string) => void;
}) {
  return (
    <div className="bg-white shadow-md py-8 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">Profil Tipini Seçin</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {Object.entries(profileTypes).map(([key, { name, icon: Icon }]) => (
            <NavLink
              key={key}
              Icon={Icon}
              label={name}
              isActive={activeProfile === key}
              onClick={() => onProfileChange(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
import { Square, Box, Circle, CornerDownRight, Minus, SidebarClose } from 'lucide-react';
import { ProfileType } from '../types';

export const profileTypes: Record<string, ProfileType> = {
  kutuProfil: {
    name: 'Kutu Profil',
    icon: Square,
    fields: [
      { name: 'width', label: 'Genişlik', unit: 'mm', placeholder: 'Genişlik giriniz' },
      { name: 'height', label: 'Yükseklik', unit: 'mm', placeholder: 'Yükseklik giriniz' },
      { name: 'thickness', label: 'Et Kalınlığı', unit: 'mm', placeholder: 'Kalınlık giriniz' },
      { name: 'length', label: 'Uzunluk', unit: 'mm', placeholder: 'Uzunluk giriniz' }
    ],
    calculate: (dimensions, density) => {
      const { width, height, thickness, length } = dimensions;
      const outerVolume = (width * height * length) / 1000000;
      const innerVolume = ((width - 2 * thickness) * (height - 2 * thickness) * length) / 1000000;
      return (outerVolume - innerVolume) * density;
    }
  },
  
  uProfil: {
    name: 'U Profil',
    icon: SidebarClose,
    fields: [
      { name: 'width', label: 'Genişlik (B)', unit: 'mm', placeholder: 'Genişlik giriniz' },
      { name: 'height', label: 'Yükseklik (A)', unit: 'mm', placeholder: 'Yükseklik giriniz' },
      { name: 'thickness', label: 'Et Kalınlığı (t)', unit: 'mm', placeholder: 'Kalınlık giriniz' },
      { name: 'length', label: 'Uzunluk', unit: 'mm', placeholder: 'Uzunluk giriniz' }
    ],
    calculate: (dimensions, density) => {
      const { width, height, thickness, length } = dimensions;
      const volume = ((width * thickness) + (2 * (height - thickness) * thickness)) * length / 1000000;
      return volume * density;
    }
  },

  boru: {
    name: 'Boru',
    icon: Circle,
    fields: [
      { name: 'isSolid', label: 'İçi Dolu', unit: '', placeholder: '', type: 'checkbox' },
      { name: 'diameter', label: 'Dış Çap', unit: 'mm', placeholder: 'Dış çap giriniz' },
      { name: 'length', label: 'Uzunluk', unit: 'mm', placeholder: 'Uzunluk giriniz' }
    ],
    calculate: (dimensions, density) => {
      const { diameter, length, isSolid, thickness } = dimensions;
      const outerRadius = diameter / 2;
      
      if (isSolid) {
        return Math.PI * Math.pow(outerRadius, 2) * length / 1000000 * density;
      } else {
        const innerRadius = outerRadius - thickness;
        const outerVolume = Math.PI * Math.pow(outerRadius, 2) * length / 1000000;
        const innerVolume = Math.PI * Math.pow(innerRadius, 2) * length / 1000000;
        return (outerVolume - innerVolume) * density;
      }
    },
    getDynamicFields: (values: Record<string, string>) => {
      const baseFields = [
        { name: 'isSolid', label: 'İçi Dolu', unit: '', placeholder: '', type: 'checkbox' },
        { name: 'diameter', label: 'Dış Çap', unit: 'mm', placeholder: 'Dış çap giriniz' },
        { name: 'length', label: 'Uzunluk', unit: 'mm', placeholder: 'Uzunluk giriniz' }
      ];

      if (values.isSolid !== 'true') {
        baseFields.splice(2, 0, {
          name: 'thickness',
          label: 'Et Kalınlığı',
          unit: 'mm',
          placeholder: 'Kalınlık giriniz'
        });
      }

      return baseFields;
    }
  },

  kosebent: {
    name: 'Köşebent',
    icon: CornerDownRight,
    fields: [
      { name: 'width', label: 'Genişlik (B)', unit: 'mm', placeholder: 'Genişlik giriniz' },
      { name: 'height', label: 'Yükseklik (A)', unit: 'mm', placeholder: 'Yükseklik giriniz' },
      { name: 'thickness', label: 'Kalınlık (t)', unit: 'mm', placeholder: 'Kalınlık giriniz' },
      { name: 'length', label: 'Uzunluk', unit: 'mm', placeholder: 'Uzunluk giriniz' }
    ],
    calculate: (dimensions, density) => {
      const { width, height, thickness, length } = dimensions;
      const volume = ((width + height - thickness) * thickness * length) / 1000000;
      return volume * density;
    }
  },

  tProfil: {
    name: 'T Profil',
    icon: Minus,
    fields: [
      { name: 'width', label: 'Genişlik (W)', unit: 'mm', placeholder: 'Genişlik giriniz' },
      { name: 'height', label: 'Yükseklik (H)', unit: 'mm', placeholder: 'Yükseklik giriniz' },
      { name: 'thickness', label: 'Kalınlık (t)', unit: 'mm', placeholder: 'Kalınlık giriniz' },
      { name: 'length', label: 'Uzunluk', unit: 'mm', placeholder: 'Uzunluk giriniz' }
    ],
    calculate: (dimensions, density) => {
      const { width, height, thickness, length } = dimensions;
      const volume = ((width * thickness) + ((height - thickness) * thickness)) * length / 1000000;
      return volume * density;
    }
  }
};
import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Profil Hesaplayıcı</h2>
            <p className="text-gray-400">
              Profil ağırlığı hesaplama işlemlerinizi kolaylaştıran profesyonel bir araç.
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-medium text-white mb-2">Geliştirici</h3>
            <p className="text-lg font-semibold text-red-400">Aytaç Melih Kılıç</p>
            <div className="flex justify-end gap-4 mt-3">
              <a 
                href="https://github.com/aytacmelihkilic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aytacmelihkilic/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:aytac@arnes.com.tr" 
                className="hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Profil Hesaplayıcı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
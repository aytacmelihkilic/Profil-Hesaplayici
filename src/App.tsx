import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { Calculator } from './components/calculator/Calculator';
import { Results } from './components/Results';
import { Footer } from './components/layout/Footer';
import { Calculation } from './types';

function App() {
  const [activeProfile, setActiveProfile] = useState('uProfil');
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  const handleCalculate = (calculation: Calculation) => {
    setCalculations(prev => [...prev, calculation]);
  };

  const removeCalculation = (index: number) => {
    setCalculations(calculations.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setCalculations([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navigation 
        activeProfile={activeProfile}
        onProfileChange={setActiveProfile}
      />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Calculator
              profileType={activeProfile}
              onCalculate={handleCalculate}
            />
            <Results
              calculations={calculations}
              onRemoveCalculation={removeCalculation}
              onClearAll={clearAll}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
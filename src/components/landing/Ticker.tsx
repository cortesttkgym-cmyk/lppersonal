import React from 'react';

export function Ticker() {
  const text = "CONSULTORIA PREMIUM • ROBERT KIRCHMAIR • TREINO PERSONALIZADO • DIETA ESTRATÉGICA • ACOMPANHAMENTO INDIVIDUAL • ";
  
  return (
    <div className="relative z-10 my-12 md:my-20">
      <div className="ticker-wrap shadow-2xl">
        <div className="ticker-content">
          {text.repeat(10)}
        </div>
      </div>
    </div>
  );
}

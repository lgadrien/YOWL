import React, { useState } from 'react';

const Paramètres = () => {
  const [paramètres, setParamètres] = useState([
    { ligne: 'Ne pas collecter mon nom', activé: false },
    { ligne: 'Ne pas collecter mon prénom', activé: false },
    { ligne: 'Me mettre en anonyme', activé: false },
    { ligne: 'Ne pas partager mon nom aux inconnus', activé: false },
  ]);

  const toggleParamètre = (index) => {
    const updatedParamètres = [...paramètres];
    updatedParamètres[index].activé = !updatedParamètres[index].activé;
    setParamètres(updatedParamètres);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {paramètres.map((paramètre, index) => (
        <div key={index} className="flex items-center justify-between w-64 my-2">
          <p>{paramètre.ligne}</p>
          <button
            onClick={() => toggleParamètre(index)}
            className={`px-4 py-2 rounded ${
              paramètre.activé ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {paramètre.activé ? 'Activé' : 'Désactivé'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Paramètres;

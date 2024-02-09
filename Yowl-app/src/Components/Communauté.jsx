const Communauté = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        <img src="..\src\assets/homme-de-securite.png" alt="" style={{ width: '50px', height: '50px' }} />
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        <img src="..\src\assets/ingenieur.png" alt="" style={{ width: '50px', height: '50px' }} />
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        <img src="..\src\assets/jardinier.png" alt="" style={{ width: '50px', height: '50px' }} />
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        <img src="..\src\assets/observation.png" alt="" style={{ width: '50px', height: '50px' }} />
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        <img src="..\src\assets\veterinaire.png" alt="" style={{ width: '50px', height: '50px' }} />
      </button>
    </div>
  );
}

export default Communauté;

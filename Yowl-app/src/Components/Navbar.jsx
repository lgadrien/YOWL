import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('user');
  const navigate = useNavigate();

  return (
    <nav className="bg-black p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl">ActuAll</a>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/Communauté" className="text-white hover:text-gray-300">Communauté</a>
          {token ? 
<button onClick={() => navigate('/logout')} className="text-white hover:text-gray-300">
Se déconnecter
</button> : 
<button onClick={() => navigate('/Login')} className="text-white hover:text-gray-300">
Se connecter
</button>}
          <a href="/Paramètres" className="text-white hover:text-gray-300">Paramètres</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
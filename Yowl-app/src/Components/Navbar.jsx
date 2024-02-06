
const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl">ActuAll</a>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/Communauté" className="text-white hover:text-gray-300">Communauté</a>
          <a href="/Login" className="text-white hover:text-gray-300">Se connecter</a>
          <a href="/Paramètres" className="text-white hover:text-gray-300">Paramètres</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
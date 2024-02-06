import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RegisterForm from './Components/RegisterForm';
import LogInForm from './Components/Login/LogInForm';
import Infos from './Components/Infos';
import Communauté from './Components/Communauté';
import Paramètres from './Components/Paramètres';
import CGU from './Components/CGU'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Infos />} />
        <Route path="/Communauté" element={<Communauté />} />
        <Route path="/Login" element={<LogInForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Paramètres" element={<Paramètres />} />
        <Route path="/CGU" element={<CGU />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

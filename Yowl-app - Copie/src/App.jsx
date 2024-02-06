import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RegisterForm from './Components/RegisterForm';
import LogInForm from './Components/Login/LogInForm';
import Sneakers from './Components/Infos';
import Communauté from './Components/Communauté';
import Settings from './Components/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Sneakers />} />
        <Route path="/Communauté" element={<Communauté />} />
        <Route path="/Login" element={<LogInForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

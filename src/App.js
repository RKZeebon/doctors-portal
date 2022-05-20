
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment';
import Home from './Components/Home/Home';
import Footer from './SharedPages/Footer';
import Navbar from './SharedPages/Navbar';

function App() {
  return (
    <div className='text-accent'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

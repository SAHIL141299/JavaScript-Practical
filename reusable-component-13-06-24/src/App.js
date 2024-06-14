import {  Route,  Routes } from 'react-router-dom';
import Home from './pages/home';
import Contactus from './pages/contactus';
import Footer from './pages/footer'
import Layout from './pages/layout'
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="/footer" element={<Footer />} />
    </Routes >
    
    </>
  );
}

export default App;

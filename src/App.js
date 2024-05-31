import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
      <Footer />   
    </div>
  );
}

export default App;

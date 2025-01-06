import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import Error from './pages/Error';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />       
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
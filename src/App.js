import './styles.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Ring from './pages/Ring';
import Isle from './pages/Isle';
import Dine from './pages/Dine';
import Engagement from './pages/Engagement';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ring' element={<Ring />} />
          <Route path='/engagement' element={<Engagement />} />
          <Route path='/isle' element={<Isle />} />
          <Route path='/dine' element={<Dine />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;

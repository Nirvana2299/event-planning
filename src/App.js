import './styles.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Ring from './pages/Ring';
import Isle from './pages/Isle';
import Dine from './pages/Dine';
import Engagement from './pages/Engagement';
import Footer from './Components/Footer';
import Anniversary from './services/Anniversary';
import AnnualFunction from './services/AnnualFunction';
import BabyShower from './services/BabyShower';
import BirthdayParty from './services/BirthdayParty';
import CulturalEvent from './services/CulturalEvent';
import EngagementServices from './services/EngagementServices';

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
          <Route path='/anniversary' element={<Anniversary/>} />
          <Route path='/annualFunction' element={<AnnualFunction/>} />
          <Route path='/babyShower' element={<BabyShower/>} />
          <Route path='/birthdayParty' element={<BirthdayParty/>} />
          <Route path='/culturalEvent' element={<CulturalEvent/>} />
          <Route path='/engagement' element={<EngagementServices/>} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;

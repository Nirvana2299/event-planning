import './styles.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Anniversary from './services/Anniversary';
import CorperateEvent from './services/CorperateEvent';
import BabyShower from './services/BabyShower';
import BirthdayParty from './services/BirthdayParty';
import NamingCeremony from './services/NamingCeremony';
import SurpriseProposal from './services/SurpriseProposal';
import FloatButton from './Components/FloatButton';
import Wedding from './pages/Wedding';
import Entertainment from './pages/Entertainment';
import Catering from './pages/Catering';
import Decoration from './pages/Decoration';
import WeddingPlanning from './services/WeddingPlanning'
import Inauguration from './services/Inaugurations'
import ThemeParties from './services/ThemeParties'
import PrivateParties from './services/PrivateParties'
import FarewellParties from './services/FarewellParties'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
        <Route path='/wedding-planning' element={<WeddingPlanning />} />
          <Route path='/corperate-event' element={<CorperateEvent />} />
          <Route path='/anniversary' element={<Anniversary />} />
          <Route path='/inauguration' element={<Inauguration />} />
          <Route path='/farewell-parties' element={<FarewellParties />} />
          <Route path='/birthday-party' element={<BirthdayParty />} />
          <Route path='/theme-parties' element={<ThemeParties />} />
          <Route path='/private-parties' element={<PrivateParties />} />
          <Route path='/baby-shower' element={<BabyShower />} />
          <Route path='/naming-ceremony' element={<NamingCeremony />} />
          <Route path='/surprise-proposal' element={<SurpriseProposal />} />
          <Route path='/' element={<Home />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/decoration' element={<Decoration />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/catering' element={<Catering />} />
        </Routes>
        <FloatButton />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;

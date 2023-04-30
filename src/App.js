import './styles.css'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel';
import Planning from './Components/Planning';
import TieupProperties from './Components/TieupProperties';
import AboutAndForm from './Components/AboutAndForm';
import Line from './Components/Line';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Planning />
      <TieupProperties />
      <AboutAndForm />
      <Line />
    </div>
  );
}

export default App;

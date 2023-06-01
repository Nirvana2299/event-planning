import Carousel from '../Components/Carousel';
import Planning from '../Components/Planning';
// import TieupProperties from '../Components/TieupProperties';
import AboutAndForm from '../Components/AboutAndForm';
import Line from '../Components/Line';
import Portfolio from '../Components/Portfolio';


export default function Home() {
  return (
    <div>
      <Carousel />
      <Planning />
      <Line />
      {/* <TieupProperties /> */}
      <Line />
      <AboutAndForm />
      <Line />
      <Line />
      <Portfolio />
    </div>
  );
}
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Middletittle from "./components/middletittle";
import ServiceSection from "./components/servicesection";
import CabCard from './components/cabcard';
import Carclass from './components/carclass';
import WhyUsSection from './components/whyussection';
import Footer from './components/footer';
import ContactButtons from './components/contactbuttons';

function App() {
  return (
  <div> <Header/>
  <Middletittle/>
  <ServiceSection/>
  <CabCard/>
  <Carclass/>
  <WhyUsSection/>
  <Footer/>
  <ContactButtons/>
   </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import WhoIs from './components/WhoIs/WhoIs';
import CardGroup from './components/Card/CardGroup';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Hero />
        <WhoIs />
        <CardGroup />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
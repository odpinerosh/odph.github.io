import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import WhoIs from './components/WhoIs/WhoIs';
import CardGroup from './components/Card/CardGroup';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Hero />
        <WhoIs />
        <CardGroup />
      </div>
    </div>
  );
}

export default App;
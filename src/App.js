import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import WhoIs from './components/WhoIs/WhoIs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Hero />
        <WhoIs />
      </div>
    </div>
  );
}

export default App;
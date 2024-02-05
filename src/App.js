import logo from './logo.svg';
import './App.scss';
import HeroSection from './components/HeroSection';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { MenuOverlay } from './components/MenuOverlay';
import ImagesCollection from './components/ImagesCollection';
import { useState } from 'react';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
     <Container>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
       <HeroSection />
       <ImagesCollection />
     </Container>
    </div>
  );
}

export default App;

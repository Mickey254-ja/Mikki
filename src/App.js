import './App.scss';
import HeroSection from './components/HeroSection';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { MenuOverlay }from './components/MenuOverlay';
// import ResponsiveImage from './components/ResponsiveImage';
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
       {/* <ResponsiveImage
      originalSrc="path-to-original-image.jpg"
      smallSrc="path-to-small-image.jpg"
      mediumSrc="path-to-medium-image.jpg"
      largeSrc="path-to-large-image.jpg"
      altText="Description"
    /> */}
       <ImagesCollection />
     </Container>
    </div>
  );
}

export default App;

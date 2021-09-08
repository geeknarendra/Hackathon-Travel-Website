import './App.css';
import Header from './components/Header';
import Typical from 'react-typical'
import Cards from './components/Cards';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Fade from 'react-reveal/Fade';
import bg from "./videos/bg.mp4"
function App() {
 
  return (
    <>
      <div className="app">
        <Header />
        <video autoPlay muted loop>
          <source src={bg} type="video/mp4" />
        </video>
        <div className="homePageText" id="home">

          <h1>Namaste India</h1>
          <h3>The traveler sees what he sees, the tourist sees what he has come to see</h3>
          <h4>Visit
            <Typical
              steps={["Agra", 1000, "Jaipur", 1000, "Kerala", 1000, "Kolkata", 1000]}
              loop={Infinity}
              className="typist"
            />
          </h4>

        </div>
      </div>
      <Cards />

      <Fade bottom>
        <ContactUs />
        <Aboutus />
      </Fade>
      <Footer />

    </>
  );
}

export default App;
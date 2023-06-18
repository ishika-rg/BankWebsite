import Hero from './components/heroSection/Hero';
import './App.css';
import Count from './components/countSection/Count';
import Testimonial from './components/testimonialSection/Testimonial';
import Csr from './components/csrSection/Csr'

function App() {
  return (
    <div className="App">

      {/* <h1> hello world </h1> */}
      <Hero />
      <Count />
      <Testimonial />
      <Csr />
      
    </div>
  );
}

export default App;

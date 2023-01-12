import About from './components/about';
import Articles from './components/articles';
import End from './components/end';
import Home from './components/home';
import Products from './components/products';
import Services from './components/services';
import { useState, useEffect } from 'react';

function App() {
  const [thisYear, setThisYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setThisYear(new Date().getFullYear())
  }, []);
  return (<>
    <Home />
    <About />
    <Products />
    <Articles />
    <Services />
    <End />
    <p style={{
      backgroundColor: '#212121',
      textAlign: 'center',
      color: 'white',
      padding: '16px',
      borderTop: '2px dashed #616161'
    }}>&#169; {thisYear} Muhammad Sulais </p>
  </>);
}

export default App;

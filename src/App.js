import React, {useEffect, useState} from 'react';
import './App.css';

import Header from './components/Header';
import Cards from './components/Cards';


const App = () => {

  const [products, setProducts] = useState();

  useEffect(() => { 
    const loadProducts = async () => {
      const response = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog');
      setProducts(await response.json());
    };
    loadProducts();
  }, []);
console.log(products);


  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;

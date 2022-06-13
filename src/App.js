
import { useEffect } from 'react';
import './App.css';
import axios from "axios";



function App() {


async function getProducts() {
  const response = await axios.get('http://localhost:2000');
  console.log(response.data);
}

  useEffect(() => {
    getProducts();
    }, []);

    
  return (
    <div className="App">
      

    </div>
  );
}

export default App;

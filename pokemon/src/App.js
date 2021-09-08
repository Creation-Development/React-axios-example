import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import axios from 'axios';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';

function App() {
  const [data, setData] = useState([])
axios.get('https://pokeapi.co/api/v2/pokemon/')
.then((res)=>{
  setData(res.data.results)
})
// console.log(data);
  return (
    <div className="main">
      <NavigationBar/>
      <Header data={data}/>
    </div>
  );
}

export default App;

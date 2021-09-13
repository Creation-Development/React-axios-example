import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      setData(res.data.results)
    })
});
// console.log(data);
  return (
    <div className="main">
      <NavigationBar data={data}/>
    </div>
  );
}

export default App;
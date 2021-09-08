import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import Bitcoins from './components/Bitcoins';

function App() {
  const [state, setstate] = useState([])
  axios.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo')
    .then((res) => (
      setstate(res.data)
    ))

  return (
    <div className="bg">
      <Bitcoins data={state} />
    </div>
  )
}

export default App;

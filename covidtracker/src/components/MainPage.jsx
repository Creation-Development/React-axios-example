import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StatewiseData from './StatewiseData'
import TotalCase from './TotalCase'

const MainPage = () => {
    const [data,setData] = useState([])
    const [region,setRegion]=useState([])
    useEffect(()=>{
        
        axios.get('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
        .then((res)=>{
            setRegion(res.data.regionData)
            setData(res.data)
        })
    },[])
    return (
        <div className="text-center py-4 container">
            <h1>Covid Tracker</h1>
            <TotalCase data={data} />
            <StatewiseData region={region}/>
        </div>
    )
}

export default MainPage

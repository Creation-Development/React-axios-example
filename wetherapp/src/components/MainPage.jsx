import { TextField } from '@material-ui/core';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'
import MediaControlCard from './Card';

const MainPage = () => {
    const [city, setCity] = useState("");
    const [wetherdata, setwetherdata] = useState([]);
    function fetchWethwer() {
        if (city === "") {
            setwetherdata([])
        }
        else {
            axios.get(`http://api.weatherapi.com/v1/current.json?key=bec106d970a64c4aaa2100540210409&q=${city}&aqi=yes`).then((value) => {
                setwetherdata(value.data);
                console.log(wetherdata);
            })
        }
    }
    return (

        <>
            <div>
                <h1 className="text-center py-4">Weather App</h1>
            </div>
            <div className="text-center my-4 search">
                <TextField className="w-25" id="standard-basic" label="Search City" onChange={(e) => setCity(e.target.value)} />
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={(e) => fetchWethwer()}>
                Search Weather
                </Button>
                {/* <button className="btn btn-info tn-sm" >Search Weather</button> */}
            </div>
            {wetherdata.length == 0 ?
                <h5 className="text-center">No City Selected...</h5>
                :
                <MediaControlCard citydata={wetherdata} />
            }
        </>
    )
}

export default MainPage

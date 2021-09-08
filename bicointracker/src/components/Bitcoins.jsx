import { FormControl, InputLabel, Select } from '@material-ui/core'
import React, { useState } from 'react'
import MediaControlCard from './DataShow'
import DefaultState from './DefaultState'

const Bitcoins = (props) => {
    if(props.data.length === 0){
        var datestr = ""
    }
    else{
        var datestr = props.data["Meta Data"]['6. Last Refreshed']
        var alldate = props.data["Time Series (Digital Currency Daily)"]
    }
    const [date, setdate] = useState("")
    const [curr, setcurr] = useState("")
    var coin = ''
    if (date == "" && curr == '') {
        var onedata = []
    }
    else {
        var coin = curr
        var onedata = props.data["Time Series (Digital Currency Daily)"][`${date}`]
    }
    return (
        <div>
            <h1 className="main-head text-center py-4">Bitcoin Tracker</h1>
            <hr style={{ borderColor: "black", opacity: 1 }} />
            {
                props.data.length === 0 ?
                    <>
                    </> :
                    <>
                        <div className="dateSelect text-center">
                            <FormControl>
                                <InputLabel htmlFor="age-native-simple">Date</InputLabel>
                                <Select
                                    native
                                    onChange={(e) => setdate(e.target.value)}
                                    inputProps={{
                                        name: 'Select Date',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    <option value="Select">---Select---</option>
                                    {
                                        Object.keys(props.data["Time Series (Digital Currency Daily)"]).map((item) => (
                                            <option value={item}>{item}</option>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            {
                                date ==='Select' || date===""?
                                null:
                            <FormControl className="mx-4">
                                <InputLabel htmlFor="age-native-simple">Curruncy</InputLabel>
                                <Select
                                    native
                                    onChange={(e) => setcurr(e.target.value)}
                                    inputProps={{
                                        name: 'Select Date',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    <option value="USD">---Select---</option>
                                    <option value="CNY">CNY</option>
                                    <option value="USD">USD</option>
                                </Select>
                            </FormControl>
                            }
                        </div>
                        {
                            date ==='Select' || date===""  && curr ==='Select' || curr===""?
                                <DefaultState data={alldate} date={datestr}/>:
                                <MediaControlCard date={onedata} coin={coin} />
                        }
                    </>
            }
        </div>
    )
}

export default Bitcoins

import React, { useState } from 'react'
import LineChart from './LineChart'
import StateCaseDetails from './StateCaseDetails'

const StatewiseData = (props) => {
    const [state, setstate] = useState("")
    return (
        <>
            <div className="text-start my-4">
                <select className="text-center" name="state" id="state" onChange={(e) => setstate(e.target.value)}>
                    <option value="select">----Select----</option>
                    {
                        props.region.map((item)=>
                            <option value={item.region}>{item.region}</option>
                        )
                    }
                </select>
            </div>
            <StateCaseDetails statedata={state} region={props.region} />
            
        </>
    )
}

export default StatewiseData

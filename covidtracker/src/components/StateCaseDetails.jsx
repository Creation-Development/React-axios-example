import React from 'react'
import ChartTwo from './ChartTwo'
import LineChart from './LineChart'

const StateCaseDetails = (props) => {
    var statecase = props.region.filter((item) => (
        item.region == props.statedata
    ))
    return (
        <>
        {
            statecase.length==0?
            <h2>No State Selected</h2>
            :
            <>
            <h2 className="text-center">{props.statedata}</h2>
            <div className="row state">
                <div className="col-3 text-center m-4">
                    <h4 className="my-4">Total Infected</h4>
                    <h4 className="my-4">{statecase[0].totalInfected}</h4>
                </div>
                <div className="col-3 text-center m-4">
                    <h4 className="my-4">Recovered</h4>
                    <h4 className="my-4">{statecase[0].recovered}</h4>
                </div>
                <div className="col-3 text-center m-4">
                    <h4 className="my-4">Deaths</h4>
                    <h4 className="my-4">{statecase[0].deceased}</h4>
                </div>
            </div>
            <div className="my-4">
            <LineChart region={statecase[0]}/>
            </div>
            <div className="my-4">
            <ChartTwo  region={statecase[0]}/>
            </div>
            </>
        }
            
        </>
    )
}

export default StateCaseDetails

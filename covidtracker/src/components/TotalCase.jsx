import React from 'react'

const TotalCase = (props) => {
    
    return (
        <div className="row">
            <div className="col-2 text-center m-2">
                <h4 className="my-4">Active cases</h4>
                <h4 className="my-4">{props.data.activeCases}</h4>
            </div>
            <div className="col-2 text-center m-2">
                <h4 className="my-4">Deaths</h4>
                <h4 className="my-4">{props.data.deaths}</h4>
            </div>
            <div className="col-2 text-center m-2">
                <h4 className="my-4">Recovered cases</h4>
                <h4 className="my-4">{props.data.recovered}</h4>
            </div>
            <div className="col-2 text-center m-2">
                <h4 className="my-4">Total cases</h4>
                <h4 className="my-4">{props.data.totalCases}</h4>
            </div>
        </div>
    )
}

export default TotalCase

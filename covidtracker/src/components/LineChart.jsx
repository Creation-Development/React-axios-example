
import React from 'react'
import Chart from "react-google-charts";

const LineChart = (props) => {
    console.log(props.region);
    return (
        <>
            <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                style={{marginLeft:"4%"}}
                    width={1100}
                    height={400}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['cases', 'Cases'],
                        [`Total Infected`,props.region.totalInfected],
                        [`Recovered`,props.region.recovered],
                        [`Deaths`,props.region.deceased],
                    ]}
                    options={{
                        title: `Cases in ${props.region.region} State`,
                        chartArea: { width: '30%' },
                        hAxis: {
                            title: `Covid Cases of ${props.region.region}`,
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'cases',
                        },
                    }}
                    legendToggle
                />
                
            </div>
        </>
    )
}

export default LineChart

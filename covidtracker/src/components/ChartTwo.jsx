import React from "react";
import Chart from "react-google-charts";
 const ChartTwo = (props) => {
  const data = [
    ["", "Cases"],
    ["Total Infected", props.region.totalInfected],
    ["Recovered", props.region.recovered],
    ["Deaths", props.region.deceased]
  ];
  const options = {
    title: `Covid Cases of ${props.region.region} State`,
    curveType: "function",
    legend: { position: "bottom" }
  };
   return (
     <div>
       <Chart
        style={{marginLeft:"3%"}}
          chartType="LineChart"
          width="92%"
          height="400px"
          data={data}
          options={options}
        />
     </div>
   )
 }
 
 export default ChartTwo
 
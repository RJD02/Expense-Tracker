import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
export default function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

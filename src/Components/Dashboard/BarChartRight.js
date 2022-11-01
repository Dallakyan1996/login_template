import s from "./dashboard-comp.module.css";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const BarChartRight = () => {

    const options = {
        chart: {
            type: 'column',
            backgroundColor: "#F0F1F5",
            borderRadius: "24px",
        },
        xAxis: {
            // type: 'datetime',
            gridLineWidth: 1,
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['701651651406506', 37.33],
                ['Delhi', 31.18],
                ['Shanghai', 27.79],
                ['Sao Paulo', 22.23],
                ['Mexico City', 21.91],
                ['Dhaka', 21.74],
                ['Cairo', 21.32],
                ['Beijing', 20.89],
                ['Mumbai', 20.67],

            ],
            color: "white",
            pointWidth: "15",
            borderRadius: "10",
      
        },
        {
            name: 'Population',
            pointPlacement: -0.275,
            // shadow: true,
            data: [
                ['701651651406506', 37.33],
                ['Delhi', 31.18],
                ['Shanghai', 27.79],
                ['Sao Paulo', 22.23],
                ['Mexico City', 21.91],
                ['Dhaka', 21.74],
                ['Cairo', 21.32],
                ['Beijing', 20.89],
                ['Mumbai', 20.67],

            ],
            color: "#4AB2F1",
            pointWidth: "20",
            borderRadius: "10",
        }]
    }

    return (
        <>
            {(
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            )}
        </>
    );
}

export default BarChartRight;
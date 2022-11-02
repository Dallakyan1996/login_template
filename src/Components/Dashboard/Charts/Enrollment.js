import s from "./../dashboard-comp.module.css";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const Enrollment = () => {

    const options = {
        chart: {
            type: 'column',
            backgroundColor: "#F0F1F5",
            borderRadius: "24px",
            height: "365rem"
        },
        title: {
            text: ""
        },
        xAxis: {
            gridLineWidth: 1,
            labels: {
                // rotation: -45,
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
            pointFormat: '<b>{point.y:.1f}</b>'
        },
        series: [
        {
            name: 'Population',
            data: [
                ['A', 37.33],
                ['B', 31.18],
                ['C', 27.79],
                ['D', 22.23],
                ['E', 21.91],
                ['F', 21.74],
                ['G', 21.32],
                ['H', 20.89],
                ['I', 20.67],

            ],
            color: "#4AB2F1",
            pointWidth: "20",
            borderRadius: "10",
        }
    ]
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

export default Enrollment;
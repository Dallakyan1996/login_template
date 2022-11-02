import s from "./../dashboard-comp.module.css";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const CRFLockedForms = (props) => {
    let options = {
        chart: {
            type: 'bar',
            backgroundColor: "#F0F1F5",
            borderRadius: "24px",
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['DM Review', 'CRA Review', 'Locked']
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
        plotOptions: {

        },
        series: [{
            name: '',
            data: [4, 4, 6, 0],
            pointWidth: 13,
            borderRadius: 8,
            color: "#62c5a5",
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#314565',
                align: 'right',
                y: 0,
                x: 40,
                style: {
                    fontSize: '10px',
                },

                // useHTML: { enabled: true },
                formatter: function () {
                    return this.y + "(" + this.y * 100 / 10 + "%)"
                }
            }
        }]
    };
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

export default CRFLockedForms;

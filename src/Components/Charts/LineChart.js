import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./line-chart.css"
require("highcharts/modules/exporting")(Highcharts)

const LineChart = (props) => {
    let options = {
        chart: {
            type: "spline"
        },
        title: {
            text: 'Line Title'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            line: {
                size: '20%',
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    distance: 25,
                    color: "black",
                    format: '{point.percentage:.1f}%</b>',

                },
                showInLegend: true
            }
        },
        series: [{
            name: 'John',
            colorByPoint: true,
            data: [
                ["A", 10],
                ["B", 111],
                ["C", 15 + 100 * Math.random()],
                ["D", 20 - 230 * Math.random()],
                ["E",10/ Math.random()]
            ]
        }]
    }

    return <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>
}

export default LineChart;
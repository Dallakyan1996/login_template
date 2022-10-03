import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
require("highcharts/modules/exporting")(Highcharts)

const Charts = () => {
    let options = {
        chart: {
            type: "pie"
        },
        title: {
            text: 'Chart Title'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            labels: {
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
            pie: {
                size: '70%',
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
                ["A", 5],
                ["B", 3],
                ["C", 4],
                ["D", 7],
                ["E", 2]
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

export default Charts;
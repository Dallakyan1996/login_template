import React from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
require("highcharts/modules/exporting")(Highcharts)

const Charts = (props) => {
    let options = {
        chart: {
            type: props.type
        },
        title: {
            text: 'Area chart with negative values'
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
        plotOptions: {
            line: {
                size: '60%',
                allowPointSelect: true,
                cursor: "pointer",
                // innerSize: "45%",
                dataLabels: {
                    enabled: true,
                    distance: -25,
                    color: "black",
                    format: '{point.percentage:.1f}%</b>',

                },
                showInLegend: true
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        },
        // {
        //     name: 'John',
        //     data: [15, 153, 234, 71, 25]
        // }, {
        //     name: 'John',
        //     data: [1, 3, 9, 17, 92]
        // }
        ]
    }
    return <>
        <HighchartsReact
            highcharts={Highcharts}
            // constructorType={'stockChart'}
            options={options}
        />
    </>
}

export default Charts;
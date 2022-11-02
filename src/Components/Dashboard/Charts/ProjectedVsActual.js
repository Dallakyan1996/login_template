import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const ProjectedVsActual = (props) => {

    let options = {
        chart: {
            zoomType: 'x',
            backgroundColor: "#F0F1F5",
            borderRadius: "24px"
        },
        title: {
            text: "Statistics",
            align: "left",
            style: {
                color: '#172B4D',
                fontWeight: 'bold'
            }
        },
        subtitle: {
        },
        xAxis: {
            type: 'datetime',
            gridLineWidth: 1
        },
        yAxis: {
            title: {
                text: "Number of Subjects"
            },
            plotLines: [{
                color: "rgb(255, 88, 172)",
                width: 2,
                value: .8,
                dashStyle: "dash"
            }]
        },
        legend: {
            enabled: true,
            verticalAlign: 'top'
        },
        credits: {
            enabled: false
        },
        plotOptions: {

        },

        series: [{
            type: 'areaspline',
            name: 'Projected Enrollment',
            dashStyle: "Dot",
            color: "#9486fe",
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#9486fe57"],
                    [1, Highcharts.color(Highcharts.getOptions().colors[4]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null,
            data: [
                [
                    1167609600000,
                    0.7537
                ],
                [
                    1167696000000,
                    0.7537
                ],
                [
                    1167782400000,
                    0.7559
                ],
                [
                    1167868800000,
                    0.5631
                ],
                [
                    1167955200000,
                    0.7644
                ],
                [
                    1168214400000,
                    0.869
                ],

            ]
        },
        {
            type: 'areaspline',
            name: 'Actual Enrollment',
            dashStyle: "Dot",
            color: "rgb(255, 88, 172, 50%)",
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "rgb(255, 88, 172, 10%)"],
                    [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null,
            data: [
                [
                    1167609600000,
                    0.8537
                ],
                [
                    1167696000000,
                    0.6537
                ],
                [
                    1167782400000,
                    0.9559
                ],
                [
                    1167868800000,
                    0.6631
                ],
                [
                    1167955200000,
                    0.8644
                ],
                [
                    1168214400000,
                    0.7
                ],

            ]
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

export default ProjectedVsActual;
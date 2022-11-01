import s from "./dashboard-comp.module.css";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const EnrollmentBySite = (props) => {

    const serData = [
        { "y": 10, "color": "#3dc1d4" },
        { "y": 11, "color": "#fb91c6" },
        { "y": 3, "color": "#ffd276" },
        { "y": 4, "color": "#8675ff" },
        { "y": 3, "color": "#4a7acf" },
        { "y": 4, "color": "#ad76d0" },
        { "y": 8, "color": "#d279a6" },
        { "y": 0, "color": "#d279a6" }
    ]
    let key = props.scoreKey; //"metavir", "ishak"
    let scorePrefix = "Score ";
    let scoreLength = 8;

    var colors = "#5645B2,#7764E4,#9283E9,#ADA2EF,#C8C1F4,#E4E0FA,#F2E7F9".split(","); //ishak colors

    if (key === "metavir") {
        scoreLength = 5;
        scorePrefix = "Score F";
        colors = "#CE2E78,#EA7DB0,#F1A8CA,#F8D3E4,#F3E1EA".split(","); //metavir colors
    }

    let seriesData = [];
    let fillSeriesData = [];
    // let bands = [];
    for (let i = 0; i < scoreLength; i++) {
        seriesData.push({
            y: 0,
            color: colors[colors.length - 1 - i],
        });
    }

    let totalCount = 0;

    for (let i = 0; i < scoreLength; i++) {
        fillSeriesData.push(totalCount);
    }
    let options = {
        chart: {
            type: "bar",
            backgroundColor: "#F0F1F5",
            borderRadius: "24px",
            marginRight: -60
        },
        credits: {
            enabled: false,
        },

        title: {
            text: props.title,
            align: "left",
            style: {
                color: "#172B4D",
                fontWeight: "bold",
                fontFamily: "Conv_Roboto-Bold,Sans-Serif",
                fontSize: "16px",
            },
        },

        yAxis: {
            visible: false,
        },

        navigation: {
            buttonOptions: {
                height: 24,
                width: 24,
                symbolSize: 24,
                symbolX: 23,
                symbolY: 21,
                symbolStrokeWidth: 2,
            },
        },
        xAxis: {
            visible: false,
            min: 0,
            max: scoreLength - 1,
        },

        plotOptions: {
            bar: {
                grouping: false,
                shadow: false,
            },
            series: {
                pointPadding: 0.43,
                groupPadding: 0,
            },
        },
        legend: {
            enabled: false,
            layout: "horizontal",
            align: "bottom",
            verticalAlign: "bottom",
            borderWidth: 0,
        },
        series: [
            {
                color: "#F0F1F5",
                data: [25, 25, 25, 25, 25, 25, 25, 25],
                borderColor: "rgb(240, 241, 245)",
                shadow: true,
                borderRadius: 5,
                pointWidth: 10,
                dataLabels: {
                    enabled: true,
                    align: "right",
                    x: 0,
                    y: -20,
                    color: "black",

                    style: {
                        fontSize: "10px",
                        fontWeight: "bolder",

                    },
                    formatter: function () {
                        var p = ((serData[this.x].y / this.y) * 100).toFixed(1);
                        return serData[this.x].y + " (" + p + "%)";
                    },
                    inside: false,
                    rotation: 0,
                },
            },
            {
                borderRadius: 5,
                borderStyle: "none",
                pointWidth: 10,
                borderColor: "D8DADD",
                dataLabels: {
                    enabled: true,
                    align: "left",
                    x: -3000,
                    y: -20,
                    color: "#000",
                    style: {
                        fontSize: "10px",
                        fontWeight: "bolder",
                    },
                    formatter: function () {
                        return scorePrefix + this.x;
                    },
                    inside: false,
                    rotation: 0,
                },
                data: serData
            },
        ],
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

export default EnrollmentBySite;
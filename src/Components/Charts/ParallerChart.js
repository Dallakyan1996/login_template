import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MyCard } from "../UI/UiComponents";
import exportew from "./../../Assets/images/exportes.png";
import s from "./line-chart.module.css"

const ParallerChart = () => {
    const inputData = [
        {
            "id": 1,
            "metavir": "1",
            "ishak": "1",
            "steatosis": "Absent",
            "subject_id": "O21-010001;MD",
            "patient": {
                "id": 42,
                "subject_id": "O21-010001;MD",
                "type": "Mouse Samples",
            }
        }]

    const colorm = {
        METAVIR: '#fb6c6c',
        ISHAK: '#7fc0fa',
        STEATOSIS: '#252cb8'
    };

    const sizesm = {
        METAVIR: 5,
        ISHAK: 7,
        STEATOSIS: 2
    };

    var seriesArray = new Array();
    var opacityRange = new Array("99", "AA", "BB", "CC", "DD", "EE", "FF");
    var index = 0;
    for (var key in colorm) {
        var bSeries = {
            type: "line",
            name: "",
            zIndex: 1000,
            color: colorm[key],
            showInLegend: false,
            lineWidth: 0,
            enableMouseTracking: false,
            data: []
        };

        var adjustment = 6.0 / parseFloat(sizesm[key] - 1.0);
        for (var k = 0; k < sizesm[key]; k++) {
            var pt = new Object();
            pt.x = index;
            pt.color = "#ffffff";
            pt.marker = {
                lineWidth: 3,
                lineColor: colorm[key] + opacityRange[k],
                symbol: 'circle',
                radius: 4,
                enabled: true
            };
            pt.y = parseFloat(k) * adjustment;
            pt.name = k;
            bSeries.data.push(pt);
        }


        var off = 70;
        if (key === "STEATOSIS")
            off = -30;

        bSeries.dataLabels = {
            enabled: true,
            align: 'left',
            style: {
                fontWeight: 'normal'
            },
            x: -off,
            verticalAlign: 'middle',
            overflow: true,
            crop: false,
            formatter: function () {

                if (this.point.category === "STEATOSIS") {

                    var a = new Array("Absent", "Present");
                    return a[this.point.index];
                }

                if (this.point.category === "METAVIR")
                    return "Score F" + this.point.index;

                return "Score " + this.point.index;
            },
        };

        seriesArray.push(bSeries);
        index++;
    }

    var indexSer = 0.0;

    /// generate subjects map



    ////

    //generate list of subjects in the object
    var subjects = new Object();
    for (var i = 0; i < inputData.length; i++) {
        var takeClearId = inputData[i].patient.subject_id.split(";")[0];
        subjects[takeClearId] = inputData[i];
    }
    ////

    var types = {
        "Ph2 Samples (Pre-dose)": "#365AB4",
        "Historic (non-A1AT) Samples": "#509cd9",
        "Mouse Samples": "#8B9AA2",
        "Historic A1AT Samples": "#8B9AA2",
    };

    var linkedTypes = {};

    var dublicateKeys = {};
    for (var key in subjects) { //for each subject
        let r = 0;
        let g = 0
        let b = Math.trunc(indexSer / (Object.keys(subjects).length) * 255.0);

        indexSer++;

        var type = subjects[key].patient.type;

        var ser = {

            visible: true,
            lineWidth: 0.5,
            name: type,
            subjectid: key,
            id: type,
            subjectData: subjects[key],
            color: types[type],
            marker: {
                symbol: 'circle',
                radius: 8,
                enabled: false
            },
            data: []
        };

        if (!ser.color)
            ser.color = "#000000";

        if (linkedTypes[type]) {
            ser.id = key;
            ser.linkedTo = type;
        }
        linkedTypes[type] = 1;

        var subj = subjects[key];

        adjustment = 6.0 / parseFloat(sizesm.METAVIR - 1.0);
        ser.data.push(parseFloat(subj.metavir) * adjustment);
        adjustment = 6.0 / parseFloat(sizesm.ISHAK - 1.0);
        ser.data.push(parseFloat(subj.ishak) * adjustment);


        adjustment = 6.0 / parseFloat(sizesm.STEATOSIS - 1.0);
        if (subj.steatosis === "Absent")
            ser.data.push(0 * adjustment);
        if (subj.steatosis === "Present")
            ser.data.push(1 * adjustment);
        seriesArray.unshift(ser);

    }

    for (var k = 0; k < seriesArray.length - 3; k++) {
        var serData = seriesArray[k].data;

        var dkey = JSON.stringify(serData);
        if (dublicateKeys[dkey] === undefined) {
            dublicateKeys[dkey] = {};
            dublicateKeys[dkey].counter = 0;
            dublicateKeys[dkey].totalCount = 0.0;
            dublicateKeys[dkey].sign = 1;
        }
        dublicateKeys[dkey].totalCount++;
    }


    for (var k = 0; k < seriesArray.length - 3; k++) {
        var serData = seriesArray[k].data;

        var dkey = JSON.stringify(serData);

        if (dkey === JSON.stringify(serData)) {
            //dublicate found

            for (var k1 = 0; k1 < serData.length; k1++) {
                let delta = 0.03;// / dublicateKeys[dkey].totalCount;
                if (dublicateKeys[dkey].totalCount < 5)
                    delta = 0.1;
                serData[k1] += delta * dublicateKeys[dkey].counter * dublicateKeys[dkey].sign;
            }

            dublicateKeys[dkey].counter++;
            dublicateKeys[dkey].sign = -dublicateKeys[dkey].sign;

        }
    }
    var options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Sample Liver Biopsies Scores',
            x: -20,
            margin: 50,
            fontSize: '25px',
            style: {
                fontWeight: 'bold'
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    symbol: 'url(' + exportew + ')'
                }
            }
        },

        navigation: {
            buttonOptions: {
                height: 24,
                width: 24,
                symbolSize: 24,
                symbolX: 23,
                symbolY: 21,
                symbolStrokeWidth: 2
            }
        },
        xAxis: {
            categories: ['METAVIR', 'ISHAK', 'STEATOSIS'],
            opposite: true,
            lineWidth: 0,
            labels: {
                style: {
                    fontSize: '12px',
                    fontWeight: '600'
                }
            },

            plotLines: [{

                color: {
                    linearGradient: [0, 0, 1, 500],
                    stops: [
                        [0, "#CE2E78"],
                        [1, "#F8D3E4"]
                    ]
                },
                width: 2,
                zIndex: 0,
                value: 0,
                id: 'plot-line-1',
            },
            {
                color: {
                    linearGradient: [1, 0, 1, 500],
                    stops: [
                        [0, "#5645B2"],
                        [1, "#ffffff"]
                    ]
                },
                width: 2,
                value: 1,
                id: 'plot-line-2'
            },
            {
                color: {
                    linearGradient: [2, 0, 2, 500],
                    stops: [
                        [0, "#CE2E78"],
                        [1, "#00ff00"]
                    ]
                },
                width: 2,
                value: 2,
                id: 'plot-line-4'

            }
            ]
        },
        yAxis: {
            min: 0,
            max: 6,
            visible: false
        },
        plotOptions:
        {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (i) {
                            // let patientId = i.point.series.userOptions.subjectData.patient.id
                            // setOpenParrallerPopup(true)
                            // setPatientParrallerId(patientId)
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false,
        },
        tooltip: {

            useHTML: true,

            formatter: function () {

                var arr = new Array("metavir", "ishak", "steatosis");

                var key = arr[this.point.index];
                var fullInfo = subjects[this.series.options.name];


                var str = `<span style="color:black;"><b>Subject</b> = {subj}</span><br>
                              <span style="color:black;"><b>Score</b> = {category}</span>
                              <br><b>{sc} Score = {f}</b>`;

                str = str.replace("{subj}", this.series.options.subjectid);
                str = str.replace("{category}", this.point.category);
                var pr = "";
                if (this.point.index === 0)
                    pr = "F";
                str = str.replace("{sc}", arr[this.point.index].toString().toUpperCase());
                str = str.replace("{f}", pr + this.series.options.subjectData[arr[this.point.index]]);
                return str;
            }
        },

        legend: {
            enabled: true,
            labelFormatter: function () {
                return '<span style="color: ' + this.color + '">&#x25cf; ' + this.name + '</span>';

            },
            symbolHeight: 11,
            symbolWidth: 11,
            symbolRadius: 0,
            itemStyle: {
                fontSize: '12px',
                font: '12pt Trebuchet MS, Verdana, sans-serif',
                color: '#A0A0A0'
            },
        },
        series: seriesArray
    }
    return (
        <>
            {inputData &&
                <MyCard>
                    <div id={s.containerGr1}>
                        <HighchartsReact
                            key={Math.random()}
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </MyCard>}
        </>
    );
}

export default ParallerChart;
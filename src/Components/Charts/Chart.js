// import React from "react";
// import HighchartsReact from "highcharts-react-official";

// class Chart extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { seconds: 0 };
//       this.exportChart = () => {
//         this.chart.exportChart();
//       };
//     }
//     componentDidMount() {
//       this.chart = this.refs.chart.chart;
//     }
  
//     render() {
//       return (
//         <div>
//           <HighchartsReact
//             highcharts={this.props.highcharts}
//             constructorType={"chart"}
//             options={this.props.options}
//             ref={"chart"}
//           />
//           <button onClick={this.exportChart}>Export</button>
//         </div>
//       );
//     }
//   }
  
//   export default Chart;


import React from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
require("highcharts/modules/exporting")(Highcharts);
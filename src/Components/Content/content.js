import './content.css';
import Charts from '../Charts/PieChart';
import MatTable from '../Table/Table.js'

const Cont = () => {
    return <>
        <div className="dashboardWrapper">
            <div className="chartsWrapper">
                <div className="chart1">
                    <Charts />
                </div>
                <div className="chart2">
                    <Charts />
                </div>
                <div className="chart3">
                    <Charts />
                </div>
                <div className="chart4">
                    <Charts />
                </div>
            </div>
            <div className="table1">
                <MatTable/>
            </div>
        </div>
    </>
}

export default Cont;
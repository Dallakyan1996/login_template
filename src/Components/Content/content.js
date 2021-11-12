import './content.css';
import Charts from '../Charts/PieChart';
import MatTable from '../Table/Table.js'

const Cont = () => {

    return <>
        <div className="dashboardWrapper">
            <div className="chartsWrapper">
                <div className="chart1">
                    <Charts type="spline" />
                </div>
                <div className="chart3">
                    <Charts type="pie" />
                </div>
                <div className="chart4">
                    <Charts type="line" />
                </div>
            </div>
            <div className="table1">
                <MatTable />
            </div>
        </div>
    </>
}

export default Cont;
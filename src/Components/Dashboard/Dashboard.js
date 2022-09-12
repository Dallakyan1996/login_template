import './dashboard.css';
import Charts from '../Charts/PieChart';
import MatTable from '../Table/Table.js'

const Dashboard = () => {
    return <>
        <div className="dashboardWrapper">
            {/* <div className="chartsWrapper">
                <div className="chart1">
                    <div className="subjectsCard">
                        <div className="cardHeader allSubjectsHeader">All Subjects</div>
                        <Charts />
                    </div>
                </div>
                <div className="chart3">
                    <div className="subjectsCard">
                        <div className="cardHeader allSubjectsHeader">All Subjects</div>
                        <Charts />
                    </div>
                </div>
                <div className="chart4">
                    <div className="subjectsCard">
                        <div className="cardHeader allSubjectsHeader">All Subjects</div>
                        <Charts />
                    </div>
                </div>
            </div>
            <div className="table1">
                <MatTable />
            </div> */}
        </div>
    </>
}

export default Dashboard;
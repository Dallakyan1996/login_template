import Cards from "../../Components/Dashboard/Cards";
import EnrollmentBySite from "../../Components/Dashboard/ChartEnrollBtSite";
import { MyCard, MyInput } from "../../Components/UI/UiComponents";
import BarChartRight from "../../Components/Dashboard/BarChartRight";
import LineChart from "../../Components/Dashboard/LineChart";

const Dashboard = (props) => {
    return <div style={{
        marginTop: "1rem"
    }}>
        <Cards />
        <div style={{
            display: "flex",
            marginTop: "2rem"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <span style={{
                    color: "#314565",
                    fontWeight: 700,
                }}>Enrollment By Site</span>
                <MyCard customStyle={{
                    marginTop: "1rem",
                    width: "100%",

                }}>
                    <EnrollmentBySite />
                </MyCard>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 4,
            }}>
                <span
                    style={{
                        color: "#314565",
                        fontWeight: 700,
                        paddingLeft: "1rem"
                    }}
                >Enrollment</span>
                <MyCard customStyle={{
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    width: "99%",
                }}>
                    <BarChartRight />
                </MyCard >
            </div>
        </div>

        <div style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem"
        }}>
            <span style={{
                color: "#314565",
                fontWeight: 700,
            }}>Projected vs Actual Enrollment</span>
            <MyCard customStyle={{
                marginTop: "1rem",
                marginBottom: "1rem",
                width: "100%",
            }}>
                <LineChart />
            </MyCard>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <MyCard customStyle={{
                flex: 1,
                marginRight: "1rem"
            }}>
                <EnrollmentBySite />
            </MyCard>
            <MyCard customStyle={{
                flex: 1
            }}>
                <EnrollmentBySite />
            </MyCard>
        </div>
    </div>
}

export default Dashboard;
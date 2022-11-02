import Cards from "../../Components/Dashboard/Cards";
import EnrollmentBySite from "../../Components/Dashboard/Charts/EnrollmentBySite";
import { MyCard, MyInput, MyRadioInput } from "../../Components/UI/UiComponents";
import Enrollment from "../../Components/Dashboard/Charts/Enrollment";
import ProjectedVsActual from "../../Components/Dashboard/Charts/ProjectedVsActual";
import CRFLockedForms from "../../Components/Dashboard/Charts/CRFLockedForms"
import QueryBySite from "../../Components/Dashboard/Charts/QueryBySite";

const Dashboard = (props) => {

    const titleStyle = {
        color: "#314565",
        fontWeight: 700,
    }

    const blockStyle = {
        display: "flex",
        flexDirection: "column",
        flex: 1
    }

    return <div style={{
        marginTop: "1rem"
    }}>
        <Cards />
        <div style={{
            display: "flex",
            marginTop: "2rem"
        }}>
            <div style={blockStyle}>
                <span style={titleStyle}>Enrollment By Site</span>
                <MyCard customStyle={{
                    marginTop: "1rem",
                    width: "100%",
                    // minHeight: "95%",
                    paddingTop: "1rem"
                }}>
                    <EnrollmentBySite />
                </MyCard>
            </div>
            <div style={
                {
                    ...blockStyle,
                    flex: 4
                }}>
                <span style={titleStyle}>Enrollment</span>
                <MyCard customStyle={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    marginLeft: "1rem",
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: "1rem"
                    }}>
                        <MyRadioInput defaultChecked={true}
                            id="splitBySites"
                            name="enrollment"
                            label="Split by Sites"
                            onChange={(e) => {
                                console.log(e.target.id)
                            }}
                        />
                        <MyRadioInput
                            id="splitByCohorts"
                            name="enrollment"
                            label="Split by Cohort"
                            onChange={(e) => {
                                console.log(e.target.id)
                            }}
                        />
                    </div>
                    <Enrollment />
                </MyCard >
            </div>
        </div>
        <div style={{
            ...blockStyle,
            marginTop: "2rem"
        }}>
            <span style={titleStyle}>Projected vs Actual Enrollment</span>
            <MyCard customStyle={{
                margin: "1rem 0 1rem 0",
            }}>
                <ProjectedVsActual />
            </MyCard>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <div style={blockStyle}>
                <span style={titleStyle}>CRF Reviewed and Locked Forms</span>
                <MyCard customStyle={{
                    margin: "1rem 1rem 1rem 0",

                }}>

                    <CRFLockedForms />
                </MyCard>
            </div>
            <div style={blockStyle}>
                <span style={titleStyle}>Queries by Site</span>
                <MyCard customStyle={{
                    margin: "1rem 0 1rem 0",
                }}>

                    <QueryBySite />
                </MyCard>
            </div>
        </div>
    </div >
}

export default Dashboard;
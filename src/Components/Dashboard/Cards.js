import { MyCard } from "../UI/UiComponents";
import { BiBuildings } from "react-icons/bi";
import s from "./dashboard-comp.module.css"

const Cards = () => {
    const cardStyle = {
        width: "97%",
        marginRight: "1rem",
        padding: "20px",
        borderRadius: "40px",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: "2rem"
    }
    return <div className={s.cardsWrapper}>
        <div style={{
            display: "flex",
            flex: 1
        }}>
            <MyCard customStyle={cardStyle}>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div className={s.cardIconDiv} >
                        <BiBuildings className={s.cardIcon} />
                    </div>
                    <span className={s.cardNameSpan}>Total Sites:</span>
                </div>
                <div className={s.countDiv}>
                    8
                </div>
            </MyCard>
            <MyCard customStyle={cardStyle}>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div className={s.cardIconDiv} style={{
                        backgroundColor: "#8675ff    "
                    }} >
                        <svg className={s.cardIcon} xmlns="http://www.w3.org/2000/svg" id="Group_6583" data-name="Group 6583" width="28.761" height="29.423" viewBox="0 0 28.761 29.423">
                            <path id="user-regular_1_" data-name="user-regular (1)"
                                d="M14.089,15.746H9.116A9.117,9.117,0,0,0,0,24.863,1.658,1.658,0,0,0,1.658,26.52h19.89a1.658,1.658,0,0,0,1.658-1.658A9.117,9.117,0,0,0,14.089,15.746ZM2.538,24.034a6.637,6.637,0,0,1,6.579-5.8h4.973a6.64,6.64,0,0,1,6.578,5.8ZM11.6,13.26a6.63,6.63,0,1,0-6.63-6.63A6.63,6.63,0,0,0,11.6,13.26Zm0-10.774A4.144,4.144,0,1,1,7.459,6.63,4.149,4.149,0,0,1,11.6,2.486Z"
                                transform="translate(0 0)"
                                fill="#fff" />
                            <circle id="Ellipse_1541" data-name="Ellipse 1541" cx="7.58" cy="7.58" r="7.58" transform="translate(13.601 14.263)" fill="#8675ff" />
                            <path id="Ellipse_1541_-_Outline" data-name="Ellipse 1541 - Outline"
                                d="M7.58,1.684a5.9,5.9,0,1,0,5.9,5.9,5.9,5.9,0,0,0-5.9-5.9M7.58,0A7.58,7.58,0,1,1,0,7.58,7.58,7.58,0,0,1,7.58,0Z"
                                transform="translate(13.601 14.263)" fill="#fff" />
                            <path id="Path_5713" data-name="Path 5713" d="M17,11h1a1,1,0,0,0,0-2H17V8a1,1,0,1,0-2,0V9H14a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0Z" transform="translate(5.089 11.693)" fill="#fff" />
                        </svg>                    </div>
                    <span className={s.cardNameSpan}>Total Subjects:</span>
                </div>
                <div className={s.countDiv}>
                    60
                </div>
            </MyCard>
        </div>
        <div style={{
            flex: 2
        }}>
            <MyCard customStyle={cardStyle}>
                <div className={s.rightCardsWrapp}>
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div className={s.cardIconDiv} style={{
                            backgroundColor: "#E55972"
                        }} >
                            <h2 style={{
                                color: "white"
                            }}>A</h2>
                        </div>
                        <span className={s.cardNameSpan}>Liver Transplantation:</span>
                    </div>
                    <div className={s.countDiv}>
                        26
                    </div>
                </div>
                <div className={s.rightCardsWrapp}>
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div className={s.cardIconDiv} style={{
                            backgroundColor: "#FF859B"
                        }} >
                            <h2 style={{
                                color: "white"
                            }}>B</h2>
                        </div>
                        <span className={s.cardNameSpan}>Cardiac On-Pump:</span>
                    </div>
                    <div className={s.countDiv}>
                        8
                    </div>
                </div>
                <div className={s.rightCardsWrapp} style={{
                    border: "none"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <div className={s.cardIconDiv} style={{
                            backgroundColor: "#FFACBB"
                        }} >
                            <h2 style={{
                                color: "white"
                            }}>B1</h2>
                        </div>
                        <span className={s.cardNameSpan}>Cardiac Not-On-Pump:</span>
                    </div>
                    <div className={s.countDiv}>
                        8
                    </div>
                </div>
            </MyCard>
        </div>
    </div>
}

export default Cards;
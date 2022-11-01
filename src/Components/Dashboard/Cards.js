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
                        <BiBuildings className={s.cardIcon} />
                    </div>
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
                            <BiBuildings className={s.cardIcon} />
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
                            <BiBuildings className={s.cardIcon} />
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
                            <BiBuildings className={s.cardIcon} />
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
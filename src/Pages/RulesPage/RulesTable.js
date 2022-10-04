import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localStorageLogin } from "../../utils/constants";
import { BiTrashAlt } from "react-icons/bi";

const RulesTable = () => {
    const dispatch = useDispatch()
    const clmnsName = new Array("RULE NAME", "DESCRIPTION", "CREATED DATE", "CREATED BY", " ")
    const userName = JSON.parse(localStorage.getItem(localStorageLogin)).user.name
    let rulesArr = useSelector(state => state.rulesArr)

    if (!rulesArr?.lenght) {
        rulesArr = JSON.parse(localStorage.getItem("rules"))
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("rules"))) {
            dispatch({
                type: "SET-RULES-ARR",
                payload: {
                    data: JSON.parse(localStorage.getItem("rules"))
                }
            })
        }
    }, [dispatch]);

    return <div>
        <div className="rlTbClmNm">
            {clmnsName.map((item, index) => {
                return <div key={index + new Date()} className={item === "DESCRIPTION" ? "desclmnmrl" : ""} >
                    {item}
                </div>
            })}
        </div>

        {rulesArr?.length ? rulesArr.map((item, index) => {
            return <div key={index} className="tableWrapperRul" >
                <div style={{ color: item.ruleColor }}> {item.ruleName}</div>
                <div className="desclmnmrl"> {item.endPoint.comp1} </div>
                <div> {item.created_at} </div>
                <div> {userName} </div>
                <div><BiTrashAlt className="trashIcon" onClick={() => {
                }} />
                </div>
            </div>
        }) : null}
        <div>
        </div>
    </div>
}

export default RulesTable;
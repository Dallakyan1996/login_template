import { useState } from "react";
import AddNewRuleModal from "./RulesModalComp";
import RulesTable from "./RulesTable";

import "./rules_comp.css"

const RulesComponent = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    return <div className="cardsWrapper">
        <div className="crtRulBtnWrp">
            <span>Monitoring Rules</span>
            <button className="crtNewRulBtn" onClick={openModal}>Create New Rule</button>
        </div>
        <AddNewRuleModal openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        <RulesTable />
    </div>
}

export default RulesComponent;
import { useState } from "react";
import { MyButton, MyCard } from "../../Components/UI/UiComponents";
import AddNewRuleModal from "./RulesModalComp";
import RulesTable from "./RulesTable";
import "./rules_comp.css"

const RulesComponent = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    return <MyCard>
        <div className="crtRulBtnWrp">
            <span>Monitoring Rules</span>
            <MyButton onClickFn={function () {
                openModal()
            }}
                customStyle={{
                    background: "linear-gradient(#3CE6BF, #56BCED)"
                }}
            >Create New Rule</MyButton>
        </div>
        <AddNewRuleModal openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        <RulesTable />
    </MyCard>
}

export default RulesComponent;
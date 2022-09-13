import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import { SketchPicker } from 'react-color'
import Select from "react-select";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    paddingBottom: "30px",
  },
};

const AddNewRuleModal = ({ modalIsOpen, setIsOpen }) => {
  let [secComp, setSecComp] = useState(false);
  let [rulesArr, setRullesArr] = useState([]);
  let [comp1Selectors, setComp1Selectors] = useState({
    ruleName: "",
    ruleColor: "",
    endPoint: "",
    change: "",
    direction: "",
    amount: "",
  });

  let [comp2Selectors, setComp2Selectors] = useState({
    endPoint: "",
    change: "",
    direction: "",
    amount: "",
  });

  function closeModal() {
    setIsOpen(false);
    setSecComp(false);
  }

  useEffect(() => {
    setRullesArr(JSON.parse(localStorage.getItem("rules")));
    console.log(rulesArr)
  }, []);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <div className="modalWrapperRules">
        <div className="modalHeader" onClick={closeModal}>
          <div className="modalTitleRul">Create New Rule</div>
          <div className="rulModalClose">x</div>
        </div>
        <div className="newRuleColorName">
          <div className="ruleNameDiv">
            <label>Rule Name</label>
            <input
              className="ruleNameInput ruleNameInputText"
              type="text"
              onChange={(e) => {
                setComp1Selectors({
                  ...comp1Selectors,
                  name: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="ruleNameDivColor">
            <label>Rule Color</label>
            {/* <SketchPicker /> */}
            <input
              className="ruleNameInput ruleNameInputColor"
              type="color"
              onChange={(e) => {
                setComp1Selectors({
                  ...comp1Selectors,
                  color: e.target.value,
                });
              }}
            ></input>
          </div>
        </div>
        <div className="componentWrapperRule">
          <RulesComponent
            compSel={comp1Selectors}
            setCompSel={setComp1Selectors}
            componentName="Component 1"
            crtNewRulComp1="crtNewRulComp1"
          />
          {secComp && (
            <RulesComponent
              compSel={comp2Selectors}
              setCompSel={setComp2Selectors}
              componentName="Component 2"
            />
          )}
          {/* <RulesComponent componentName="Component 2" /> */}
        </div>
        <div className="componentWrapperRule rulesAndOrBtns">
          <button
            className="crtNewRulBtn crtNewAdd"
            onClick={() => {
              setSecComp(true);
            }}
          >
            <span>+ </span>
            AND
          </button>
          {/* <button className="crtNewRulBtn">
            <span>+ </span>
            OR
          </button> */}
        </div>
        <div className="componentWrapperRule rulesAndOrBtn submitCancelDiv">
          <button className="crtNewRulBtn cncBtn" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="crtNewRulBtn sbtBtn"
            onClick={() => {
              localStorage.setItem([setComp1Selectors]);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewRuleModal;

const RulesComponent = ({
  componentName,
  crtNewRulComp1,
  compSel,
  setCompSel,
}) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className={`'crtNewRulComp ' + ${crtNewRulComp1}`}>
      <div className="componentTitle">{componentName}</div>
      <div className="component1Selectors">
        <div className="slectItemRule">
          <label>Endpoint</label>
          <Select
            options={options}
            onChange={(e) => {
              console.log(e.value);
              setCompSel({
                ...compSel,
                endPoint: e.value,
              });
            }}
          />
        </div>
        <div className="slectItemRule">
          <label>Change</label>
          <Select
            options={options}
            onChange={(e) => {
              setCompSel({
                ...compSel,
                change: e.value,
              });
            }}
          />
        </div>
        <div className="slectItemRule">
          <label>Direction</label>
          <Select
            options={options}
            onChange={(e) => {
              setCompSel({
                ...compSel,
                direction: e.value,
              });
            }}
          />
        </div>
        <div className="amountSelDiv">
          <div
            className="amunDiv"
            onChange={(e) => {
              setCompSel({
                ...compSel,
                amount: e.value,
              });
            }}
          >
            <label>Amount</label>
            <Select options={options} />
          </div>
          <div className="">
            <label>Unit</label>
            <Select options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

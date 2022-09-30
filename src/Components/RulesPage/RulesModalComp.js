import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
  const dispatch = useDispatch()
  let [secComp, setSecComp] = useState(false);
  let rulesArrState = useSelector(state => state.rulesArr)
  let date = new Date()
  let [comp1Selectors, setComp1Selectors] = useState(
    {
      ruleName: "",
      ruleColor: "black",
      endPoint: {
        comp1: "Predicted DLCO",
        comp2: "Predicted DLCO"
      },
      change: {
        comp1: "Absolute",
        comp2: "Absolute"
      },
      direction: {
        comp1: "More than",
        comp2: "More than"
      },
      amount: {
        comp1: null,
        comp2: null
      },
      created_at: date.toDateString()
    });

  function closeModal() {
    setIsOpen(false);
    setSecComp(false);
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("rules"))?.lenght) {
      dispatch({
        type: "SET-RULES-ARR",
        payload: {
          data: JSON.parse(localStorage.getItem("rules"))
        }
      })
    }
  }, [dispatch]);

  useEffect(() => {
    if (rulesArrState.length) {
      localStorage.setItem("rules", JSON.stringify(rulesArrState));
    }
  }, [rulesArrState]);
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
                  ruleName: e.target.value,
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
                  ruleColor: e.target.value,
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
              compSel={comp1Selectors}
              setCompSel={setComp1Selectors}
              componentName="Component 2"
            />
          )}
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
              let date = new Date()
              setComp1Selectors({
                ...comp1Selectors,
                created_at: date
              })
              dispatch({
                type: "SET-RULES-ARR",
                payload: {
                  data: [...rulesArrState, comp1Selectors]
                }
              })
              setComp1Selectors({
                ruleName: "",
                ruleColor: "black",
                endPoint: {
                  comp1: "Predicted DLCO",
                  comp2: "Predicted DLCO"
                },
                change: {
                  comp1: "Absolute",
                  comp2: "Absolute"
                },
                direction: {
                  comp1: "More than",
                  comp2: "More than"
                },
                amount: {
                  comp1: null,
                  comp2: null
                },
                created_at: date.toDateString()
              })
              closeModal()
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal >
  );
};

export default AddNewRuleModal;

const RulesComponent = ({
  componentName,
  crtNewRulComp1,
  compSel,
  setCompSel,
}) => {
  const optEndpoint = [
    { value: "Predicted DLCO", label: "Predicted DLCO" },
    { value: "Predicted FEV1", label: "Predicted FEV1" },
    { value: "Predicted FVC", label: "Predicted FVC" },
  ];
  const optChange = [
    { value: "Absolute", label: "Absolute" },
    { value: "Predicted", label: "Predicted" },
  ];
  const optDirection = [
    { value: "More than", label: "More than" },
  ];

  return (
    <div className={`'crtNewRulComp ' + ${crtNewRulComp1}`}>
      <div className="componentTitle">{componentName}</div>
      <div className="component1Selectors">
        <div className="slectItemRule">
          <label>Endpoint</label>
          <Select
            options={optEndpoint}
            defaultValue={optEndpoint[0]}
            onChange={(e) => {
              if (componentName === "Component 1") {
                setCompSel({
                  ...compSel,
                  endPoint: {
                    ...compSel.endPoint,
                    comp1: e.value
                  },
                });
              }
              if (componentName === "Component 2") {
                setCompSel({
                  ...compSel,
                  endPoint: {
                    ...compSel.endPoint,
                    comp2: e.value
                  },
                });
              }
            }}
          />
        </div>
        <div className="slectItemRule">
          <label>Change</label>
          <Select
            options={optChange}
            defaultValue={optChange[0]}
            onChange={(e) => {
              if (componentName === "Component 1") {
                setCompSel({
                  ...compSel,
                  change: {
                    ...compSel.change,
                    comp1: e.value
                  },
                });
              }
              if (componentName === "Component 2") {
                setCompSel({
                  ...compSel,
                  change: {
                    ...compSel.change,
                    comp2: e.value
                  },
                });
              }
            }}
          />
        </div>
        <div className="slectItemRule">
          <label>Direction</label>
          <Select
            options={optDirection}
            defaultValue={optDirection[0]}
            onChange={(e) => {
              if (componentName === "Component 1") {
                setCompSel({
                  ...compSel,
                  direction: {
                    ...compSel.direction,
                    comp1: e.value
                  },
                });
              }
              if (componentName === "Component 2") {
                setCompSel({
                  ...compSel,
                  direction: {
                    ...compSel.direction,
                    comp2: e.value
                  },
                });
              }
            }}
          />
        </div>
        <div className="amountSelDiv">
          <div
            className="amunDiv asfas"
          >
            <label>Amount</label>
            <input
              className="ruleNameInput ruleNameInputText"
              type="text"
              onChange={(e) => {
                if (componentName === "Component 1") {
                  setCompSel({
                    ...compSel,
                    amount: {
                      ...compSel.amount,
                      comp1: e.target.value
                    },
                  });
                }
                if (componentName === "Component 2") {
                  setCompSel({
                    ...compSel,
                    amount: {
                      ...compSel.amount,
                      comp2: e.target.value
                    },
                  });
                }
              }}
            ></input>
          </div>
          <div className="asfas">
            <label>Unit</label>
            <Select />
          </div>
        </div>
      </div>
    </div>
  );
};

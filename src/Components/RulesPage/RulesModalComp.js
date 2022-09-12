import React from 'react';
import Modal from 'react-modal';
// import { SketchPicker } from 'react-color'
import Select from 'react-select';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: "10%",
        minHeight: "60%",
        borderRadius: "20px",
        paddingTop: "5px",
        paddingBottom: "55px"
    },
};

const AddNewRuleModal = ({ modalIsOpen, setIsOpen }) => {

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <div>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
        >
            <div className='modalHeader' onClick={closeModal}>
                <div className='modalTitleRul'>Create New Rule</div>
                <div className='rulModalClose'>x</div>
            </div>
            <div className='newRuleColorName'>
                <div className='ruleNameDiv'>
                    <label>Rule Name</label>
                    <input className='ruleNameInput ruleNameInputText' type='text'></input>
                </div>
                <div className='ruleNameDivColor'>
                    <label>Rule Color</label>
                    {/* <SketchPicker /> */}
                    <input className='ruleNameInput ruleNameInputColor' type='color'></input>
                </div>
            </div>
            <div className='componentWrapperRule'>
                <RulesComponent componentName="Component 1" crtNewRulComp1="crtNewRulComp1" />
                <RulesComponent componentName="Component 2" />
            </div>
            <div className='componentWrapperRule rulesAndOrBtns'>
                <button className="crtNewRulBtn crtNewAdd">
                    <span>+ </span>
                    AND</button>
                <button className="crtNewRulBtn">
                    <span>+ </span>
                    OR</button>
            </div>
        </Modal>
    </div>
}

export default AddNewRuleModal;



const RulesComponent = ({ componentName, crtNewRulComp1 }) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return <div className={`'crtNewRulComp ' + ${crtNewRulComp1}`} >
        <div className='componentTitle'>{componentName}</div>
        <div className='component1Selectors'>
            <div className='slectItemRule'>
                <label>Endpoint</label>
                <Select
                    options={options}
                />
            </div>
            <div className='slectItemRule'>
                <label>Change</label>
                <Select
                    options={options}
                />
            </div>
            <div className='slectItemRule'>
                <label>Direction</label>
                <Select
                    options={options}
                />
            </div>
            <div className='amountSelDiv'>
                <div className='amunDiv'>
                    <label>Amount</label>
                    <Select
                        options={options}
                    />
                </div>
                <div className=''>
                    <label>Unit</label>
                    <Select
                        options={options}
                    />
                </div>
            </div>
        </div>
    </div >
}
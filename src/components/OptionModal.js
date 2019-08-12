import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected option"
        >
        <h3>Selected option :</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.handleOptionModalClose}>Okay</button>
        </Modal>
    );

};

export default OptionModal;
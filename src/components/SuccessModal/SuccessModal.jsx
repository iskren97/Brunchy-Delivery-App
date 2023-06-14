import React from 'react';
import ModalCSS from './SuccessModal.module.css';

const SuccessModal = ({ setOpenModal }) => {
  return (
    <div className={ModalCSS.modalBackground}>
      <div className={ModalCSS.modalContainer}>
        <h1 className={ModalCSS.modalTitle}>Congratulations!</h1>

        <div className={ModalCSS.modalMsg}>
          <p>Your order it's on its way.</p>
        </div>

        <div>
          <button
            className={ModalCSS.modalBtn}
            onClick={() => setOpenModal(false)}
          >
            <span className={ModalCSS.okBtn}>Ok</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

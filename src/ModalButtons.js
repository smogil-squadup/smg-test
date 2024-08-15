import React, { useState } from "react";
import "./ModalButtons.css";

const ModalButton = ({ buttonText, iframeUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>{buttonText}</button>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <iframe
              src={iframeUrl}
              title={`Modal for ${buttonText}`}
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
};

const ModalButtons = () => {
  return (
    <div className="button-container">
      <ModalButton
        buttonText="94046"
        iframeUrl="https://s3.amazonaws.com/smg.squadup.com/94046.html"
      />
      <ModalButton
        buttonText="94047"
        iframeUrl="https://s3.amazonaws.com/smg.squadup.com/94047.html"
      />
    </div>
  );
};

export default ModalButtons;

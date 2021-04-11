import React, { useState } from "react";
import "./modal.scss";

const Modal = ({ hideModal, toggleModal, children }) => {
  const overlayClieckted = () => {
    toggleModal();
  };
  if (hideModal) return null;

  return [
    <div key={123} className="modalOverlay" onClick={() => toggleModal()} />,
    <div key={66} className="modalWrap">
      <div key={3455} className="modal">
        {children}
      </div>
    </div>,
  ];
};
export default Modal;

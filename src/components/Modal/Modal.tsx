import React from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

// createPortal
const Modal = ({ children, open = false, handleClose = () => {} }: IProps) => {
  if (typeof document === "undefined") return <div className="modal"></div>;

  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center p-5 transition-all ${open ? "" : "invisible opacity-0"}`}
    >
      <div
        className="absolute inset-0 bg-black opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="modal-content relative z-10 h-full max-h-[500px] w-full max-w-container rounded-lg bg-white bg-opacity-20 p-2 md:max-h-[900px]">
        {children}
      </div>
    </div>,
    document.querySelector("body")!,
  );
};

export default Modal;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
type Props = {
  children: JSX.Element;
};

const Modal = ({ children }: Props) => {
  const navigate = useNavigate();

  console.log("---- EN MODAL ----");
  const back = () => {
    // e.stopPropagation();
    navigate(-1);
  };

  return (
    <div
      onClick={back}
      className="top-0 fixed left-0 bottom-0 right-0 h-screen"
      style={{
        background: "rgba(0, 0, 0, 0.85)",
      }}
    >
      <button type="button" onClick={back}>
        Close
      </button>
      {children}
    </div>
  );
};

export default Modal;

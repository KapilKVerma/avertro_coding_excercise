import React, { useState } from "react";
// === Components - bootstrap ===
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
// === Components - icons ===
import { AiOutlineCheckCircle } from "react-icons/ai";

const AppAlerts = (props) => {
  const { message, showAlert, setResMessage } = props;
  const [show, setShow] = useState(showAlert);

  const handleClose = () => {
    setShow(false);
    setResMessage("");
  };

  // Close modal in 2sec
  setTimeout(handleClose, 2000);

  return (
    <>
      <Modal show={show} className="p-0 m-0">
        <Alert variant="success" className="font_md p-4 m-0">
          <AiOutlineCheckCircle className="font_lg" />
          &nbsp;&nbsp;{message}
        </Alert>
      </Modal>
    </>
  );
};

export default AppAlerts;

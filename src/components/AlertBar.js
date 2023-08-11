import React from "react";
import AlertContext from "../context/notes/alertContext";
import Alert from "./Alert";
import { useContext } from "react";
const AlertBar = () => {
    const context1  = useContext(AlertContext);
    const{alert} = context1;
  return (
    <>
     <Alert alert={alert}/>
    </>
  );
};

export default AlertBar;

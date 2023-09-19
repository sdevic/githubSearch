import React, { useReducer } from "react";

import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT,REMOVE_ALERT } from "../types";


const AlertState = props => {
    const initialState= null;
    const [state,dispacth] = useReducer(AlertReducer,initialState);

    //set alert
    const setAlert = (msg,type)=>{
        dispacth({
            type: SET_ALERT,
            payload:{msg: msg, type:type}
    })
        
        setTimeout(()=> dispacth({REMOVE_ALERT}),5000);
      }
    return <AlertContext.Provider value={{
        alert: state,
        setAlert
       
    }}> 
    {props.children}
        
    </AlertContext.Provider>
}
export default AlertState;
import React, {createContext, useReducer} from "react";
import Appreducer from "./Appreducer";

const initialState = {
    employees: [
        {
            id:1,
            name:"Ishan Mandrah",
            location:"Kathmandu",
            Designation:"frontend Developer"
        }
    ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer (AppReducer, initialState);

    function RemoveEmployee (id) {
        dispatch({
            type: "REMOVE_EMPLOYEE",
            payload:id
        });
    }
    function addEmployee(employees) {
        dispatch({
            type:"ADD_EMPLOYEES",
            payload:employees
        });
    }
    function editEmployee(id) {
        dispatch({
            type:"EDIT_EMPLOYEE",
            payload: employees
        });
    }   
    return(
        <GlobalContext.Provider
        value={{
            employees:state.employees,
            removeEmployee,
            addEmployee,
            editEmployee

        }}
    >{children}
    </GlobalContext.Provider>
    );
};
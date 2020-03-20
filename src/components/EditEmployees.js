import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const Editemployee = route =>{
    let history = useHistory();
    const {employees, editEmployees} = useContext(GlobalContext);
    const[selectedUser, setSelectedUser]= useState({
        id:null,
        name:"",
        designation:"",
        location:""
    });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const SelectedUser = employees.find(emp =>emp.id === parseInt(employeeId));
        setSelectedUser = employees.find
    })
}
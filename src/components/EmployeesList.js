import React from 'react';
import {GlobalContext} from '../context/GlobalState';
import {link} from 'react-router-dom';

export const EmployeeList = ()=> {
    const {Employees, RemoveEmployee, EditEmployee} = useContext(GlobalContext);
    return(
        <fragment>
            {Employees.length>0 ?(
                <fragment>
                    {Employees.map(employee =>(
                        <div className="flex items-center bg-gray-100 mb-10 shadow" key={employee.id}>
                            <div classname="flex-auto text-left px-4 py-2 m-2">
                    <p className="text-gray-900 leading-none">{employee.name}</p>
                    <p classname="text-gray-600">{employee.designation}</p>
                    <span classname="inline-block text-sm font-semibold mt-1">{employee.location}</span>
                            </div>

                        </div>

                    ))}
                     
                <fragment/>
               
            )}
        </fragment>
    )
}

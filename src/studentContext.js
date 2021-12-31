import React from "react";
import { useState, createContext } from "react";

   export  const StudentContext = createContext()

export function StudentProvider(props){

    const [students, setStudents] = useState([ {

        name: "ravi",
        age: "20",
        city: "chennai",
        id:"01"
      },
    
      {
        name: "Madhan",
        age: "22",
        city: "delhi",
        id:"02"
      },
    
      {
        name: "Kavitha",
        age: "23",
        city: "bengaluru",
        id:"03"
      }
      ])


      return(

        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
      )
}
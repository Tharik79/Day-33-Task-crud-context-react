import React, {useContext, useState} from "react";
import { StudentContext } from "./studentContext";



function AddStudent(){

    const [students, setStudent] = useContext(StudentContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateAge = (e)=>  {
        setAge(e.target.value);
    };

    const addStudent = (e) => {
        e.preventDefault();

        setStudent((listedStudents) => [...listedStudents,  {name: name}, {age: age} ] )
    };

    return(
        <div className="form">
            <form onSubmit={addStudent}>
                 <input className="form-control" type='text' onChange={updateName} placeholder="Name"/><br/>
                 <input className="form-control" type='text' onChange={updateAge} placeholder="Age"/>
                <button className="btn btn-primary">Add Student</button>

            </form>
        </div>    
          
    );

};

export default AddStudent;
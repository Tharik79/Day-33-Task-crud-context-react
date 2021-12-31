import React, {useContext, useState} from "react";
import { StudentContext } from "./studentContext";


function AddStudent(){

    const [students, setStudent] = useContext(StudentContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateAge = (e) {
        setAge(e.target.value);
    };

    const addStudent = (e) => {
        e.preventDefault();

        setStudent((listedStudents) => [...listedStudents, {name: name}, {age: age} ] )
    };

    return(

        <form onSubmit={addStudent}>
            <input type='text' name='name' onChange={updateName} />
            <input type='number' onChange={updateAge} />
            <button>Submit</button>

        </form>
    );

};

export default AddStudent;
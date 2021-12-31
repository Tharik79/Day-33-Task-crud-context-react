import logo from './logo.svg';
import './App.css';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useContext} from "react";
import { StudentProvider } from './studentContext';
import {StudentContext} from "./studentContext";


function App() {
  return (
    <div className="App">
      <h1>Axios code</h1>
      <StudentProvider>
        <StudentList />
      </StudentProvider>
          
    </div>
  );
}

export default App;

function StudentList(){

    const [students, setStudents] = useContext(StudentContext);

  
      
      return(

        <div>
         { students.map((student) => (
              <Student 
                name={student.name}
                age= {student.age}
                key={student.id}
              />
          )

          ) }

          
        </div>
      );

} ;

function Student({name, age}){

  return(
  <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
  </div>

  )
}



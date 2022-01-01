// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useContext} from "react";
import { StudentProvider } from './studentContext';
import {StudentContext} from "./studentContext";
import AddStudent from './addStudent';



function App() {
  return (
    <div className="App">
      
      <StudentProvider>
        <AddStudent />
        <StudentList />
      </StudentProvider>
          
    </div>
  );
}

export default App;

function StudentList(){

    const [students, setStudents] = useContext(StudentContext);
     
      
      return(

        <div className='list'>

            { students.map((student) => (

                    <Student 
                    
                   name={student.name}
                  age= {student.age}
                   key={student.id}  />
                            
                        )
                
                
              )  }

                     

          
        </div>
      );

} ;

  function Student({ name, age, id}){

            return(
              <div>

                  <h3>Name = {name}</h3>
                  <h3>Age = {age}</h3>
                  <h4>{id}</h4>

              </div>
            );
            };      
            




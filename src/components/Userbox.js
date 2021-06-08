import { useState } from 'react';
import './Userbox.css'

const Userbox = (props) => {


const [enteredName, setName] = useState('');
const [enteredAge, setAge] = useState('');

const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredName || !enteredAge){
        props.warning(true)
    } else {
        const userData = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge,
        }
    
        props.newEntry(userData)
        setName('');
        setAge('');
    }

   
}

const nameChangeHandler = (event) => {
setName(event.target.value); 
}

const ageChangeHandler = (event) => {
setAge(event.target.value); 
}

    return (
        <div className="userbox">
            <form onSubmit={submitHandler}>
            <div>
                <label>User Name</label>
                <input type="text" value={enteredName} name="name" onChange={nameChangeHandler}></input>
            </div>
            <div>
                <label>Age</label>
                <input type="text" value={enteredAge} name="age" onChange={ageChangeHandler}></input>
            </div>
            <div>
                <button type="submit" label="Add">Add user</button>
            </div>
            
            </form>
                
        </div>
    )
}

export default Userbox
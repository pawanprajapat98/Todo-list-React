import React, { useState } from 'react'
import "./Todo.css";
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Todo() {
    const [inputvalue, setinput] = useState("");
    const [tasks, settask] = useState([]);


    function handelsubmit(e) {
        e.preventDefault();
        settask([...tasks, inputvalue])
        setinput("")
    }

    function handeldelete(e,index)
    {
        const updatedlistdeta=tasks.filter((e,id)=>{
            return index!=id;
        })
        e.preventDefault();
        settask(updatedlistdeta)
       
    } 
    
    
    function removeall()
    {
        settask([]);
    }
    

    return (

            <div className='box'>
            <div className='container'>
           
                <div className='heading'>
                <h1>-: Todo List :-</h1>
                </div>
               
            <form onSubmit={handelsubmit}>
                <input onChange={(e) => setinput(e.target.value)} placeholder='Type here..........' value={inputvalue} type='text' required />
                <button className='btn0' type='submit'>Add Data</button>
            </form>
            <ul>
                {tasks.map((tasks, index) => {
                    return (
                         <li  key={index}>{tasks}
                          <a className='delete-icon' href="" onClick={(e)=>handeldelete(e,index)}>
                            <DeleteIcon/>
                          </a>
                         </li>
                    )
                })}
            </ul>
            {
                tasks.length>=1 &&
                <button className='btn1' onClick={removeall}>Delete All Data</button>
            }
        </div>
        </div>
    )
}

export default Todo;

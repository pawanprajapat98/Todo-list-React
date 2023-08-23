import React, { useState } from 'react'
import "./Todo.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
function Todo() {
    const [inputvalue, setinput] = useState("");
    const [tasks, settask] = useState([]);
    const [editvalue,seteditvalue]=useState(null)
    function handelsubmit(e) {
        if(editvalue==null){
            e.preventDefault();
            settask([...tasks, inputvalue])
            setinput("")
        }
        else{
            e.preventDefault();
         settask(tasks.map((item,id)=>{
            if(editvalue==id){
                return inputvalue
            }
            return item;
         }))
         seteditvalue(null)
         setinput("")
        }
        
    }
    function handelEdit(e,index){
         e.preventDefault();
         const newitem =  tasks.find((item,id)=>{
            return index===id
        })
        setinput(newitem)
        seteditvalue(index)
        
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
                            <div className='buttons'>
                                <a className='delete-icon' href="" onClick={(e)=>handeldelete(e,index)}>
                                    <DeleteIcon/>
                                </a>
                                <a className='edit-icon' href="" onClick={(e)=>handelEdit(e,index)}>
                                    <EditNoteIcon/>
                                </a>
                            </div>
                         
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

import React, {useState}from "react";
import DisplayNote from "./DisplayNote";

function CreateNote(){
    const [text,setText]=useState({
        title:'',
        content:''
    })

    const handleChange=(event)=>{
        const {value,name} = event.target;
        setText(prevValue=>({
            ...prevValue,
            [name]:value
        }))
    }
    
    const [items,setItems]=useState([])

    const handleClick=(event)=>{
        const newitem={
            key: items.length +1,
            title: text.title,
            content : text.content
        }
        setItems(prevValue=>[...prevValue,newitem])
        setText({
            title:'',
            content:''
        })
        event.preventDefault();
    };

    return(
        <div>
        <form>
            <input onChange ={handleChange} name='title' placeholder="Enter you title" value={text.title} />
            <input onChange ={handleChange}  name='content' placeholder="Enter you context" value={text.content} />
            <button onClick={handleClick} type='submit'>Add</button>
        </form>
            <DisplayNote items={items} />
        </div>
    )
}
export default CreateNote;
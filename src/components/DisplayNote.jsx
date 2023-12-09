import React,{useState,useEffect}from "react";

function DisplayNote(props){

    const [myitems,setItems ]= useState([])

    useEffect(() => {
        setItems(props.items);
      },[props.items]);

    const deleteElement=(event,index)=>{
        setItems(prevValue=>{
            const update=[...prevValue];
            update.splice(index,1);
            return update;
        })
    }

    return( 
        <div>
        {myitems.map((value,index)=>( /* εδω προσοχη δεν πρεπει να βαλω μονο props θελει και το item*/
            <div key={value.key} className="note">
            <h1> {value.title}</h1>
            <p>{value.content}</p>
            <button onClick={()=>deleteElement(index)}>Delete</button>
            </div>
        ))}
        </div> 
    );
}
export default DisplayNote;
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Read = () => {

    const { id } = useParams();
    
    let [note, setNote] = useState(null)
    
    useEffect(() => {
        getNote(id);
    },[id])
    
    let getNote = async (id) => {
            
        let response = await fetch(`http://127.0.0.1:8000/note/${id}/`);
        let data = await response.json();
        setNote(data);

    }

  return (
    <div>
        <h2>Note: {note?.note}</h2>
        <br>
        
        </br>
        <h5>Body: {note?.body}</h5>
    </div>
  )
}

export default Read
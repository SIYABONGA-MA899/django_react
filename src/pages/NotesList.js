import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList';
import Create from '../components/Create';

const NotesList = () => {

    let [notes, setNotes] = useState([]);

    useEffect(() => { 
      getNotes() 
    }, [])

    let getNotes = async () => {

        let response = await fetch('http://127.0.0.1:8000/notes/');
        let data = await response.json();
        setNotes(data);
    }


  return (
    <div>
        <button><Create /></button>
        <hr>
        
        </hr>
        {notes.map((note, index) => (
          <ItemList key={index} note={note} />
        ))}
    </div>
  )
}

export default NotesList
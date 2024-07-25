import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Save from '../components/Save';


const Note = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    console.log(typeof(id))

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote(id);
    },[id])

    let getNote = async (id) => {
        
        let response = await fetch(`http://127.0.0.1:8000/note/${id}/`);
        let data = await response.json();
        setNote(data);
    }

    let createNote = async () => {
        
        fetch("http://127.0.0.1:8000/create/", {
            method : 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(note)
        })

    }

    let updateNote = async () => {

        fetch(`http://127.0.0.1:8000/update/${id}/`, {
            method : 'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(note)


        })
    }

    let deleteNote = async () => {

        fetch(`http://127.0.0.1:8000/delete/${id}/`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
    }

    const handleUpdate = () => {

        if(id === "new"){
            createNote()
        }
        if (id !== 'new' && note.note.length === 0){
            deleteNote();
        }
        else{
            updateNote();
        }
        navigate('/')
             
    }

    /*const handleDelete = () => {

        if (id !== 'new' && note.note.length === 0){
            deleteNote();
            navigate('/');
            return
        }
        deleteNote();
        navigate('/');
        //return 
    }*/



    return (
        <div className='word-color'>
            <button onClick={handleUpdate}><Save /></button>
            <hr>
            
            </hr>
            <h3>note:</h3><input type='text' value={note?.note} onChange={(e) => setNote({...note, note: e.target.value})}></input>
            <hr>

            </hr>
            <h3>body:</h3><input type='text' value={note?.body} onChange={(e) => setNote({...note, body: e.target.value})}></input>
        </div>
    )
}

export default Note
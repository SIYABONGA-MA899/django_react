import React from 'react'
//import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Delete = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    /*let [note, setNote] = useState(null)

    useEffect(() => {
      getNote(id)
    }, [id])

    let getNote = async (id) => {
      let response =  await fetch(`http://127.0.0.1:8000/note/${id}/`)
      let data =  await response.json()
      setNote(data)
    }*/

    let deleteNote = async () => {

        fetch(`http://127.0.0.1:8000/delete/${id}/`, {
          method: 'DELETE',
          headers: {'Content-type': 'application/json'}
        })

    }

    let handleDelete = () => {
      deleteNote()
      navigate('/')
    }
  

  return (
      <div>are you sure you want to delete this note? <button onClick={handleDelete}>yes</button> </div>
  )
}

export default Delete
import React from 'react'
import { Link } from 'react-router-dom'
import Delete from '../components/Delete';
import Update from '../components/Update';

const ItemList = ({ note }) => {
  return (
    <div>
      <Link to={`/read/${note.id}`}><p>{note.note}</p></Link>
      <button><Link to={`/delete/${note.id}`}><Delete /></Link></button>
      <button><Link to={`/note/${note.id}`}><Update /></Link></button>
    </div>
    
    
  )
}

export default ItemList
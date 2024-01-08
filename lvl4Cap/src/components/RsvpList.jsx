import React, { useState, useContext } from 'react';
import { RSVPContext } from '../context';

const DisplayCreatedRSVP = () => {

// Set States + call context + handle change \/\/\/

  const { RSVPs, setRSVP, handleUpdate, handleDelete } = useContext(RSVPContext);
  
  const [editId, setEditId] = useState(null);
  
  const [editedPost, setEditedPost] = useState({ title: '', description: '', imgUrl: '' });

console.log(RSVPs)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prevState) => ({ ...prevState, [name]: value }));
  };


// Button functions \/ \/ \/

  const startEditing = (id) => {
    setEditId(id);
    const { title, description, imgUrl } = RSVPs.find((thing) => thing._id === id);
    setEditedPost({ title, description, imgUrl });
  };



  const finishEditing = (id) => {
    const updatedRSVPs = RSVPs.map((thing) =>
      thing._id === id ? { ...thing, ...editedPost } : thing
    );
    setRSVP(updatedRSVPs);
    setEditId(null);
    handleUpdate(id, editedPost)
  };

  const deletePost = (id) => {
    const updatedArray = RSVPs.filter(obj => obj._id !== id);
    setRSVP(updatedArray);
    handleDelete(id)
  };
  



  return (
    <>
    <h1 className='RSVP--List--Title'>current RSVPs</h1>
    <div className='RSVP--list'>
      {RSVPs.map((RSVP) => (
        <div key={RSVP._id } className='RSVP--post--container'>
          <img src={RSVP.imgUrl}/>
          <h1>{RSVP.title}</h1>
          <p>{RSVP.description}</p>

          {editId === RSVP._id ? (
            <form className='edit--inputs'>
              IMG: <input type="text" name="imgUrl" value={editedPost.imgUrl} onChange={handleChange} />

              Name:  <input type="text" name="title" value={editedPost.title} onChange={handleChange} />

              Email: <input type="text" name="description" value={editedPost.description} onChange={handleChange} />
              <button type="button" onClick={() => finishEditing(RSVP._id)}>Save</button>
                            
            </form>
          ) : (
          <div className='post--container--buttons'>
            <button type="button" onClick={() => startEditing(RSVP._id)}> Edit </button>
            
            <button onClick={() => deletePost(RSVP._id)}>X</button>
          </div>
          )}
        </div>
      ))}
    </div>
  </>);
};

export default DisplayCreatedRSVP;

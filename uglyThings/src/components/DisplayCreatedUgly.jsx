import React, { useState, useContext } from 'react';
import { UglyContext } from '../Context';

const DisplayCreatedUgly = () => {

// Set States + call context + handle change \/\/\/

  const { uglyThings, setUglyThings, handleUpdate, handleDelete } = useContext(UglyContext);
  
  const [editId, setEditId] = useState(null);
  
  const [editedPost, setEditedPost] = useState({ title: '', description: '', imgUrl: '' });

console.log(uglyThings)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prevState) => ({ ...prevState, [name]: value }));
  };


// Button functions \/ \/ \/

  const startEditing = (id) => {
    setEditId(id);
    const { title, description, imgUrl } = uglyThings.find((thing) => thing._id === id);
    setEditedPost({ title, description, imgUrl });
  };



  const finishEditing = (id) => {
    const updatedUglyThings = uglyThings.map((thing) =>
      thing._id === id ? { ...thing, ...editedPost } : thing
    );
    setUglyThings(updatedUglyThings);
    setEditId(null);
    handleUpdate(id, editedPost)
  };

  const deletePost = (id) => {
    const updatedArray = uglyThings.filter(obj => obj._id !== id);
    setUglyThings(updatedArray);
    handleDelete(id)
  };
  



  return (
    <div className='post--list'>
      {uglyThings.map((uglyThing) => (
        <div key={uglyThing._id } className='post--container'>
          <img src={uglyThing.imgUrl}/>
          <h1>{uglyThing.title}</h1>
          <p>{uglyThing.description}</p>

          {editId === uglyThing._id ? (
            <form className='edit--inputs'>
              IMG: <input type="text" name="imgUrl" value={editedPost.imgUrl} onChange={handleChange} />

              Title:  <input type="text" name="title" value={editedPost.title} onChange={handleChange} />

              Description: <input type="text" name="description" value={editedPost.description} onChange={handleChange} />
              <button type="button" onClick={() => finishEditing(uglyThing._id)}>Save</button>
                            
            </form>
          ) : (
          <div className='post--container--buttons'>
            <button type="button" onClick={() => startEditing(uglyThing._id)}> Edit </button>
            
            <button onClick={() => deletePost(uglyThing._id)}>X</button>
          </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayCreatedUgly;

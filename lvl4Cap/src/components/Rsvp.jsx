import React, {useContext , useState} from 'react';
import { RSVPContext } from '../context'; 
import RSVPList from './RsvpList'
const CreatePost = () => {


  // call context + Set States + handle change + Handle submit\/\/\/


  const{ postRSVP } = useContext(RSVPContext)

    const [newRSVP, setNewRSVP] = useState({
    title:"" ,
    description:"" ,
    imgUrl: ""
})


function handleChange (e){
 const {name, value} = e.target
 setNewRSVP(prevState => {
  return {
    ...prevState, 
    [name] : value
  }
 } )
}

function handleSubmit (e){
  e.preventDefault()
  postRSVP(newRSVP)
  setNewRSVP({  
  title:"" ,
  description:"" ,
  imgUrl: ""
})

}

console.log(newRSVP)
  return (
  <div className='create--RSVP--container'>
    <form onSubmit={handleSubmit} className='create--RSVP--input--container'>
        <p className='create--RSVP--Text' >Submit RSVP here: </p>
        <input type="text" placeholder='Name' value={newRSVP.title} name='title' onChange={handleChange} className='create--RSVP--input'/>
        <input type="text" placeholder='Email' value={newRSVP.description} name='description' onChange={handleChange} className='create--RSVP--input'/>
        <input type="text" placeholder='ImgUrl' value={newRSVP.imgUrl} name='imgUrl' onChange={handleChange} className='create--RSVP--input' />
      <button className='create--RSVP--input'>submit</button>
    </form>
    {newRSVP.title || newRSVP.description || newRSVP.imgUrl ? (
      <>
          <h2 className='preview--indicator'>Preview </h2>
        <div className='preview--container'>
          
          <img src={newRSVP.imgUrl} className='preview--img'  />
          <h1 className='preview--name'>{newRSVP.title}</h1>
          <p className='preview--email'>{newRSVP.description}</p>
        </div>
        </>
      ) : null}
      <RSVPList/>
    </div>
  );
};

export default CreatePost;

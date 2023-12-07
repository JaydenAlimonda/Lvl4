import React, {useContext , useState} from 'react';
import { UglyContext } from '../Context'; 

const CreatePost = () => {


  // call context + Set States + handle change + Handle submit\/\/\/


  const{ postUglyThing } = useContext(UglyContext)

    const [newUglyThing, setNewUglyThing] = useState({
    title:"" ,
    description:"" ,
    imgUrl: ""
})


function handleChange (e){
 const {name, value} = e.target
 setNewUglyThing(prevState => {
  return {
    ...prevState, 
    [name] : value
  }
 } )
}

function handleSubmit (e){
  e.preventDefault()
  postUglyThing(newUglyThing)
  setNewUglyThing({  
  title:"" ,
  description:"" ,
  imgUrl: ""})

}

console.log(newUglyThing)
  return (
  <div className='create--post--container'>
    <form onSubmit={handleSubmit} className='create--post--input--container'>
      <div className='create--post--text--input'>
        Title  <input type="text" placeholder='Title' value={newUglyThing.title} name='title' onChange={handleChange}/>
        Description  <input type="text" placeholder='Description' value={newUglyThing.description} name='description' onChange={handleChange}/>
        IMG <input type="text" placeholder='ImgUrl' value={newUglyThing.imgUrl} name='imgUrl' onChange={handleChange}/>
      </div>
      <button>submit</button>
    </form>
    <hr />
    <h2>Preview </h2>
    <img src={newUglyThing.imgUrl} className='preview--img'/>
    <h1 className='preview--title'>{newUglyThing.title}</h1>
    <p className='preview--description'>{newUglyThing.description}</p>
  </div>
  );
};

export default CreatePost;

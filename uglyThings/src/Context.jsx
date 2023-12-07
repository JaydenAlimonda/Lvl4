import axios from "axios"
import React, {useState, useEffect} from "react"

const UglyContext = React.createContext()

function UglyContextProvider(props){ 
    
    const [uglyThings, setUglyThings] = useState([])
    // Get data init
useEffect(() => {
    axios.get('https://api.vschool.io/JaydenAlimonda/thing')
        .then(res => {
            setUglyThings(res.data)
        })
        .catch(error => console.log(error))
},[])
    //Post Data
const postUglyThing = (newThing) => {
    axios
      .post('https://api.vschool.io/JaydenAlimonda/thing', newThing)
      .then((response) => {
        setUglyThings(prevState =>{
            return [
                ...prevState,
                response.data
            ]
        });   

      })

      .catch((error) => {
        console.error('Error posting ugly thing:', error);
      });
  };


  const handleUpdate = (id, updatedData) => {
    axios.put(`https://api.vschool.io/JaydenAlimonda/thing/${id}`, updatedData)
      .then(response => {
        console.log('Update Successful:', response.data);
      })
      .catch(error => {
        console.error('Update Failed:', error);

      });
  };
  

  const handleDelete = (id) => { 
  axios.delete(`https://api.vschool.io/JaydenAlimonda/thing/${id}`)

  .then(response => {
    console.log('Delete request successful', response.data);
  })
  .catch(error => {
    console.error('Error deleting resource', error);
  });}


    return(
        <UglyContext.Provider value={{
            uglyThings: uglyThings ,
            postUglyThing: postUglyThing , 
            setUglyThings: setUglyThings,
            handleUpdate:handleUpdate ,
            handleDelete:handleDelete

        }}>
           {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}
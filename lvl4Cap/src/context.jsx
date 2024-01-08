import axios from "axios"
import React, {useState, useEffect} from "react"

const RSVPContext = React.createContext()

function RSVPContextProvider(props){ 
    
    const [RSVPs, setRSVP] = useState([])
    // Get data init
useEffect(() => {
    axios.get('https://api.vschool.io/JaydenAlimondaWed/thing')
        .then(res => {
            setRSVP(res.data)
        })
        .catch(error => console.log(error))
},[])
    //Post Data
const postRSVP = (newThing) => {
    axios
      .post('https://api.vschool.io/JaydenAlimondaWed/thing', newThing)
      .then((response) => {
        setRSVP(prevState =>{
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
    axios.put(`https://api.vschool.io/JaydenAlimondaWed/thing/${id}`, updatedData)
      .then(response => {
        console.log('Update Successful:', response.data);
      })
      .catch(error => {
        console.error('Update Failed:', error);

      });
  };
  

  const handleDelete = (id) => { 
  axios.delete(`https://api.vschool.io/JaydenAlimondaWed/thing/${id}`)

  .then(response => {
    console.log('Delete request successful', response.data);
  })
  .catch(error => {
    console.error('Error deleting resource', error);
  });}


    return(
        <RSVPContext.Provider value={{
            RSVPs: RSVPs ,
            postRSVP: postRSVP , 
            setRSVP: setRSVP,
            handleUpdate:handleUpdate ,
            handleDelete:handleDelete

        }}>
           {props.children}
        </RSVPContext.Provider>
    )
}

export {RSVPContext, RSVPContextProvider}
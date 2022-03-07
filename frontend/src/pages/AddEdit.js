import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './AddEdit.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    contact: "",
}

const AddEdit = () => {
    const [state, setState] = useState(initialState)

    const {name, email, contact} = initialState;

    
    const addContact = async (data) => {
        const response = await axios.post("http://localhost:5000/user", data)

        if (response.status === 200) {
            toast.success(response.data)
        }
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
       e.preventDefault();

       if (!name || !email || !contact) {
           toast.error("Please provide value into each input field")
           
       } else {
           addContact(state)
           setTimeout(() => navigate("/"), 500);
        
       }
        
    }

    const handleInputChange =(e) => {
        let {name, value} = e.target
        setState({...state, [name]: value})
    }

    return (
        <div style={{marginTop: "100px"}}>
           <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center",}} onSubmit={handleSubmit}>
               <label htmlFor="name">Name</label>
               <input type="text" id="name" name="name" placeholder="Enter name..." onChange={handleInputChange}  />

               <label htmlFor="email">Email</label>
               <input type="email" id="email" name="email" placeholder="Enter email..." onChange={handleInputChange} />

               <label htmlFor="contact">Contact</label>
               <input type="text" id="contact" name="contact" placeholder="Enter contact..." onChange={handleInputChange}  />
               <input type="submit" value="Add" />
           </form>
        
        </div>
    )
}

export default AddEdit
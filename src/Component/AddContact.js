import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddContact = ({AddContact}) => {
    const [contactData, setContactData] = useState({name: '', email: ''})
    const handleAdd=(e)=>
    {
        e.preventDefault()
        if(contactData.name === '' || contactData.email === '')
        {
            alert('All fields are mandatory')
            return
        }
        AddContact(contactData)
        setContactData({name: '', email: ''})
    }

  return (
    <div className='add-contact'>

        <h2>Add Contact</h2>
        <form>
            <div>
                <label>Name:</label>
                <input type='text' placeholder='Enter your name' 
                onChange={(e) => setContactData({...contactData, name: e.target.value})} 
                 value={contactData.name} name='name' />
            </div>
            <br />
            <div>
                <label>Email:</label>
                <input type='text' placeholder='Enter your Email' 
                onChange={(e) => setContactData({...contactData, email: e.target.value})}
                value={contactData.email} name="email" />
            </div>
            <br />
          
            <button type='submit' onClick={handleAdd}>Add Contact</button>
        </form>
    </div>
  )
}

export default AddContact
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header';
import AddContact from './Component/AddContact';
import ContactList from './Component/ContactList';
// import { useState } from 'react';
import uuid4 from 'uuid4';

function App() {
  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  } , []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    
  }, [contacts]);
  const [contacts, setContacts] = useState();
  const addContact = (contact) => {
    // console.log(contact, "from addContact");
    setContacts([...contacts,{id:uuid4() ,contact}]);

  };
  const deleteContact = (id) => {
    // console.log(id, "from deleteContact");
     const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
     });
    setContacts(newContactList);
  }
  return (
    <div className="App">
      <Header />
      <AddContact AddContact={addContact} />
      <ContactList  contact={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;

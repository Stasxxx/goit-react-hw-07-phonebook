// import { useState, useEffect } from "react";
// import { nanoid } from 'nanoid';
import { ContactForm } from "./contacts/Contacts";
import { Filter } from "./Filter/filter";
import { Form } from "./form/Form";
import { Container } from "./app.styled";

// const KEY = 'list_contacts';
export const App = () => {
  // const [ contacts, setContacts ] = useState(() => JSON.parse(localStorage.getItem(KEY)) ?? []);
  // const [ filterInput, setFilter ] = useState('');
  
  // const filterInputId = nanoid();

  // useEffect(() => {
  //   localStorage.setItem(KEY, JSON.stringify(contacts));
  // },[contacts]);

  // const handleFilterChange = e => {
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // };

  // const getVisibleFilter = () => {
  //   const normalizedFilter = filterInput.toLowerCase()
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // }


  // const visibleContacts = getVisibleFilter()
   
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
         
        <h2>Contacts</h2>
        <Filter />
        <ContactForm />
      </Container>
        
    );
};

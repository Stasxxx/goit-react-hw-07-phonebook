import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./contacts/Contacts";
import { Filter } from "./Filter/filter";
import { Form } from "./form/Form";


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterInputId = nanoid();

  handleFilterChange = e => {
    const {name, value} = e.currentTarget
    this.setState({[name]: value})
  };

  // banExistingContacts = date => {
  //   const name = this.state.contacts.filter(item => item.name.includes(date.name));
  //   if (date.name === name[0].name) {
  //     return alert(`${name[0].name} is already in contacts.`)
  //   }
  // }

  handleFormSubmit = date => {
    const name = this.state.contacts.filter(item => item.name.includes(date.name));
    if (date.name === name[0].name) {
      return alert(`${name[0].name} is already in contacts.`)
    }
    const contact = {
      id: nanoid(),
      name: date.name,
      number: date.number
    }
    
    this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts]
    }))
    
  }

  getVisibleFilter = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => item.id !== contactId)],
    }))
  }

  render() {

    
    const visibleContacts = this.getVisibleFilter()
   
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={ this.handleFormSubmit } />
        
        <h2>Contacts</h2>
        <Filter value={this.state.filter} id={this.filterInputId} onChange={this.handleFilterChange}/>
        <ContactForm contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
          
      </div>
        
    );
  }
};

import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./contacts/Contacts";
import { Filter } from "./Filter/filter";
import { Form } from "./form/Form";
import { Container } from "./app.styled";

const KEY = 'list_contacts';
export class App extends Component {
  state = {
    contacts: [ ],
    filter: '',
  };

  filterInputId = nanoid();

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(KEY));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    const {name, value} = e.currentTarget
    this.setState({[name]: value})
  };

  handleFormSubmit = date => {
    
    const contact = {
      id: nanoid(),
      name: date.name,
      number: date.number
    }
    
    const name = this.state.contacts.filter(item => item.name.includes(date.name));
    
    if (name.length === 0) {
      return this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts]
    }))
    } else if (name[0].name) {
      return alert(`${name[0].name} is already in contacts.`)
    }
    
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
      <Container>

        <h1>Phonebook</h1>
        <Form onSubmit={ this.handleFormSubmit } />
        
        <h2>Contacts</h2>
        <Filter value={this.state.filter} id={this.filterInputId} onChange={this.handleFilterChange}/>
        <ContactForm contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
          
      </Container>
        
    );
  }
};

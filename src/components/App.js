import { Component } from "react";
import { nanoid } from 'nanoid'
import { Container } from "./container/Container";
import { ContactList } from "./contacts/Contacts";
import { Filter } from "./Filter/filter";


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  filterInputId = nanoid();

  handleInputChange = e => {
    const {name, value} = e.currentTarget
    this.setState({[name]: value})
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))

    this.reset()
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
   
    return (
      <>
        <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
              <input
              id = {this.nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
            <label htmlFor={this.numberInputId}>
              Number
              <input
              id={this.numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Sign up as</button>
        </form>

        </Container>
        
          <div>
          <h2>Contacts</h2>

          <Filter value={this.state.filter} id={this.filterInputId} onChange={this.handleInputChange}/>
         
            <ContactList contacts={visibleContacts} />
          
          </div>
        
      </>
        
    );
  }
};

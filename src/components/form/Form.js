import { Component } from "react";
import { nanoid } from 'nanoid';

export class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = e => {
        const { name, value } = e.currentTarget
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);

        this.reset()
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    };


render() {
    return (
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
    )
    }
}
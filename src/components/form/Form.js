import { Component } from "react";
import {Div, Label,Input,Button} from "./form.styled"
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Form extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        name: '',
        number: '',
    };

    nameInputId = nanoid();
    numberInputId = nanoid();

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
        <Div>
    <form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
        Name
            <Input
            id = {this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
        />
        </Label>
        <Label htmlFor={this.numberInputId}>
            Number
            <Input
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
        />
        </Label>
        <Button type="submit">Add contact</Button>
            </form>
        </Div>
    )
    }
}
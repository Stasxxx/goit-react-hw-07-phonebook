import { useState } from "react";
import {Div,Label,Input,Button} from "./form.styled"
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleInputChange = e => {
        // console.log(e.currentTarget.value)
         const { name, value } = e.currentTarget;
         switch (name) {
             case 'name':
                 setName(value);
                 break;
             case 'number':
                 setNumber(value);
                 break;
             default:
                 return;
         }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e.currentTarget.value)
        onSubmit({ name, number });
        setName('')
        setNumber('') 
        
    };

    return (
        <Div>
        <form onSubmit={handleSubmit}>
            <Label htmlFor={nameInputId}>
                Name
                <Input
                id = {nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleInputChange}
            />
            </Label>
            <Label htmlFor={numberInputId}>
                Number
                <Input
                id={numberInputId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleInputChange}
            />
            </Label>
            <Button type="submit">Add contact</Button>
        </form>
        </Div>
    )
    
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
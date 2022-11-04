import { Div, Label, Input, Button } from "./form.styled"
import { nanoid } from 'nanoid';
import { useDispatch, } from "react-redux";
import { addContact } from "redux/contactsSlice";

    
const nameInputId = nanoid();
const numberInputId = nanoid();
 

export const Form = () => {
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target.elements
        const contact = { id: nanoid(), name: form.name.value, number: form.number.value }
        
        dispatch(addContact(contact));       
        e.target.reset()
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
            />
            </Label>
            <Button type="submit">Add contact</Button>
        </form>
        </Div>
    )
    
}

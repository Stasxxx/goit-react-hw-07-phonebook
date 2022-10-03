import PropTypes from "prop-types";
import {Item, Button,List} from "./contacts.styled"


export const ContactForm = ({ contacts, onDeleteContact }) => {
    // console.log(contacts)
    return (
        <List>
            {contacts.map(contact => <Item key={contact.id}>{contact.name}: {contact.number} <Button type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</Button></Item>)}
            
        </List>
    )
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func.isRequired,
}
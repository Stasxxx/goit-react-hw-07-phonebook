// import PropTypes from "prop-types";
import { Item, Button, List } from "./contacts.styled"
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";


export const ContactForm = ({ contacts, onDeleteContact }) => {
    const selector = useSelector(getContacts);
    const dispatch = useDispatch();

    const delContact = contactId => {
        
    dispatch(deleteContact(contactId))
  }
    return (
        <List>
            {selector.map(contact => <Item key={contact.id}>{contact.name}: {contact.number} <Button type="button" onClick={()=> delContact(contact.id)}>Delete</Button></Item>)}
        </List>
    )
}

// ContactForm.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
//     onDeleteContact: PropTypes.func.isRequired,
// }
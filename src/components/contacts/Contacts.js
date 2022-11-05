// import PropTypes from "prop-types";
import { Item, Button, List } from "./contacts.styled"
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";


export const ContactForm = () => {
    const selector = useSelector(getContacts);
    const dispatch = useDispatch();
    const contact = useSelector(getFilter);

    const getVisibleFilter = () => {
        const normalizedFilter = contact.toLowerCase()
        return selector.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
    
    const visibleContacts = getVisibleFilter()

    const delContact = contactId => {
    dispatch(deleteContact(contactId))
  }
    return (
        <List>
            {visibleContacts.map(contact => <Item key={contact.id}>{contact.name}: {contact.number} <Button type="button" onClick={()=> delContact(contact.id)}>Delete</Button></Item>)}
        </List>
    )
}

// import PropTypes from "prop-types";
import { Item, List } from "./contacts.styled"
import { CardContact } from "components/CardContact/CardContact";
import { useSelector} from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
// import { deleteContact } from "redux/contactsSlice";


export const ContactForm = () => {
    const selector = useSelector(getContacts);
    // const dispatch = useDispatch();
    const contact = useSelector(getFilter);

    const getVisibleFilter = () => {
        const normalizedFilter = contact.toLowerCase()
        return selector.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
        
    const delContact = contactId => {
        // dispatch(deleteContact(contactId))
    };

    const visibleContacts = getVisibleFilter()

    return (
        <List>
            {visibleContacts.map(contact =>
                <Item key={contact.id}><CardContact contact={contact} delContact={delContact} /></Item>)
            }
        </List>
    )
};


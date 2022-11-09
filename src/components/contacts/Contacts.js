// import PropTypes from "prop-types";
import { Item, List } from "./contacts.styled"
import { CardContact } from "components/CardContact/CardContact";
import { useSelector,useDispatch} from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";
import { deleteContact } from "redux/operations";


export const ContactForm = () => {
    const selector = useSelector(selectContacts);
    const dispatch = useDispatch();
    const contact = useSelector(selectFilter);
    const getVisibleFilter = () => {
        const normalizedFilter = contact.toLowerCase()
        return selector.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
        
    const delContact = contactId => {
        dispatch(deleteContact(contactId))
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


// import PropTypes from "prop-types";
import { Item, List } from "./contacts.styled"
import { CardContact } from "components/CardContact/CardContact";
import { useSelector,useDispatch} from "react-redux";
import { selectVisibleFilter } from "redux/selectors";
import { deleteContact } from "redux/operations";


export const ContactForm = () => {
    
    const dispatch = useDispatch();
    
    const visibleContacts = useSelector(selectVisibleFilter);
    
    const delContact = contactId => {
        dispatch(deleteContact(contactId))
    };

    

    return (
        <List>
            {visibleContacts.map(({id,name,phone}) =>
                <Item key={id}><CardContact id={id} name={name} phone={phone} delContact={delContact} /></Item>)
            }
        </List>
    )
};


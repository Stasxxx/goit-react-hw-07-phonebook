import { Container, Button } from "./CardContact.styled";
import { deleteContact } from "redux/operations";
import { useDispatch } from "react-redux";


export const CardContact = ({ id, name, phone }) => {
    const dispatch = useDispatch();
        
   const delContact = () => {
       dispatch(deleteContact(id));
    };

    return (
        <Container>
            <div>{name}: {phone}</div>
            <Button type="button" onClick={delContact}>Delete</Button>
        </Container>
    )
}
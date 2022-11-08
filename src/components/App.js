
import { ContactForm } from "./contacts/Contacts";
import { Filter } from "./Filter/filter";
import { Form } from "./form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./app.styled";
import { fetchContacts } from "redux/operations";
import { getIsLoading, getError } from "redux/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
         
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in  progress...</b>}
        <ContactForm />
      </Container>
        
    );
};

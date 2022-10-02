
export const ContactForm = ({ contacts, onDeleteContact }) => {
    // console.log(contacts)
    return (
        <ul>
            {contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number} <button type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</button></li>)}
            
        </ul>
    )
}
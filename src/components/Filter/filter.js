import PropTypes from 'prop-types';
import { Label, Input, Div } from "components/Filter/filter.styled";

export const Filter = ({value, onChange, id}) => {
    return (
        <Div>
    <Label htmlFor={id}>
            Find contacts by name
        <Input
        id = {id}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onChange}
        />
            </Label>
        </Div>
)
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
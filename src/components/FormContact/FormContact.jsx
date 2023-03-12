import PropTypes from 'prop-types';
import css from './FormContact.module.css';
export const FormContact = ({ onAddContactHandler }) => {
  return (
    <form className={css.form} onSubmit={onAddContactHandler}>
      <label className={css.labelInput} htmlFor="name">
        Name
      </label>
      <input
        className={css.inputForm}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.labelInput} htmlFor="namber">
        Number
      </label>
      <input
        className={css.inputForm}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btmForm} type="submit">
        Add contact
      </button>
    </form>
  );
};

FormContact.propTypes = {
  onAddContactHandler: PropTypes.func,
};

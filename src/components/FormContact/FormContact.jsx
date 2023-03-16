import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/actionCreators';
import { getContacts } from 'store/contacts/selectors';
import css from './FormContact.module.css';

export const FormContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContactHandlerr = evt => {
    evt.preventDefault();
    const { name, number } = evt.target.elements;
    const nameValue = name.value;
    const numbervalue = number.value;
    if (!nameValue || !numbervalue) return;
    if (contacts) {
      const nameMatch = contacts.filter(item =>
        item.name.toLowerCase().includes(nameValue.toLowerCase())
      );

      if (nameMatch.length) return alert(`${nameValue} is already in contacts`);
    }
    dispatch(
      addContact({ id: nanoid(), name: nameValue, number: numbervalue })
    );
    evt.target.reset();
  };
  return (
    <form className={css.form} onSubmit={addContactHandlerr}>
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

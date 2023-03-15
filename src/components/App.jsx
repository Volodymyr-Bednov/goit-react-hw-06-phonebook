import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Firter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';

import { addContact, deleteContact } from '../store/contacts/actionCreators';

import css from './App.module.css';
import { filtContacts } from 'store/filter/actionCreators';
import { searchKey } from 'store/filter/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(searchKey);
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

  const filterChahge = evt => {
    dispatch(filtContacts(evt.target.value));
  };

  const getFilteredContacts = (contacts, filter = '') => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  const deleteContactHandler = evt => {
    dispatch(deleteContact(evt.target.dataset.id));
  };

  return (
    <div className={css.wrap}>
      <Section
        title={'Phonebook'}
        children={<FormContact onAddContactHandler={addContactHandlerr} />}
      />
      <Section title={'Contacts'}>
        <Firter onFilterChahge={filterChahge} valueFilter={filter} />
        <ListContacts
          dataList={filteredContacts}
          onDeleteContactHandler={deleteContactHandler}
        />
      </Section>
    </div>
  );
};

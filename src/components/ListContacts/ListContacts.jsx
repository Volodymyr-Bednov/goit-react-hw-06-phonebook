import { useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import { searchKey } from 'store/filter/selectors';
import { ItemContact } from './ItemContact';

export const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(searchKey);
  const getFilteredContacts = (contacts, filter = '') => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(item => (
          <ItemContact key={item.id} dataItem={item} />
        ))}
    </ul>
  );
};

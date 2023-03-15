import PropTypes from 'prop-types';
import { ItemContact } from './ItemContact';
export const ListContacts = ({ dataList, onDeleteContactHandler }) => {

  return (
    <ul>
      {(dataList) && dataList.map(item => (
        <ItemContact
          key={item.id}
          dataItem={item}
          onDeleteItemHandler={onDeleteContactHandler}
        />
      ))}
    </ul>
  );
};

// ListContacts.propTypes = {
//   dataList: PropTypes.array,

//   onDeleteContactHandler: PropTypes.func,
// };

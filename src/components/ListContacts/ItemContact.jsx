import PropTypes from 'prop-types';
import css from './ListContacts.module.css';
export const ItemContact = ({
  dataItem: { id, name, number },
  onDeleteItemHandler,
}) => {
  //console.log(name);
  return (
    <li className={css.item}>
      {name}: {number}
      <button
        className={css.btnDel}
        data-id={id}
        type="button"
        onClick={onDeleteItemHandler}
      >
        Delete
      </button>
    </li>
  );
};
ItemContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteItemHandler: PropTypes.func,
};

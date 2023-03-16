import { useDispatch, useSelector } from 'react-redux';
import { filtContacts } from 'store/filter/actionCreators';
import { searchKey } from 'store/filter/selectors';
import css from './Filter.module.css';

export const Firter = () => {
  const filter = useSelector(searchKey);
  const dispatch = useDispatch();

  const filterChahge = evt => {
    dispatch(filtContacts(evt.target.value));
  };
  return (
    <div className={css.filterWrap}>
      <label className={css.labelInput} htmlFor="fipter">
        Find contacts by name
      </label>
      <input
        className={css.inputForm}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={filterChahge}
      ></input>
    </div>
  );
};

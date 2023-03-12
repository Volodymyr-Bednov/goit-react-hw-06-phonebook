import PropTypes from 'prop-types';
import css from './Filter.module.css';
export const Firter = ({ valueFilter, onFilterChahge }) => {
  return (
    <div className={css.filterWrap}>
      <label className={css.labelInput} htmlFor="fipter">
        Find contacts by name
      </label>
      <input
        className={css.inputForm}
        type="text"
        name="fipter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={valueFilter}
        onChange={onFilterChahge}
      ></input>
    </div>
  );
};

Firter.propTypes = {
  valueFilter: PropTypes.string,
  onFilterChahge: PropTypes.func,
};

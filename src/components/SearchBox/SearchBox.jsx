import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        id={searchId}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;

import { statusFilter } from 'components/redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterForm = ({ target: { value } }) => {
    dispatch(statusFilter(value));
  };
  return (
    <div>
      <input type="text" name="filter" onChange={filterForm} />
    </div>
  );
};

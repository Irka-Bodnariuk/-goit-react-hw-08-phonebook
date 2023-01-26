import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

import { Label, Input, Form } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <Form>
      <Label>
        <Input
          type="text"
          value={filter}
          placeholder="Find contacts by name"
          onChange={changeFilter}
        ></Input>
      </Label>
    </Form>
  );
};

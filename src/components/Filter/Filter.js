import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

import { styled } from '@mui/material/styles';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f1f3f4',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  margin: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginTop: '20px',
    width: '70%',
  },
}));
const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  color: '#8b8b8b',
}));

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <SearchBar>
      <SearchInput
        value={filter}
        placeholder="Search"
        onChange={changeFilter}
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchBar>

    // <Form>
    //   <Label>
    //     <Input
    //       type="text"
    //       value={filter}
    //       placeholder="Search"
    //       onChange={changeFilter}
    //     ></Input>
    //   </Label>
    // </Form>
  );
};

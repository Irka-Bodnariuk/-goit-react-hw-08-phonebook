import styled from 'styled-components';
import { RiDeleteBin2Fill, RiEdit2Line } from 'react-icons/ri';

export const Item = styled.li`
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  background-color: #ff98471a;
  box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 6px;

  border: none;
  color: black;
  background-color: #fff;
  box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-weight: 700;
  &:hover {
    box-shadow: none;
    color: white;
    background-color: orangered;
  }
`;
export const IconDelete = styled(RiDeleteBin2Fill)`
  width: 30px;
  height: 30px;
`;
export const IconEdit = styled(RiEdit2Line)`
  width: 30px;
  height: 30px;
`;

import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';

export const List = styled.ul`
  list-style: none;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

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
export const Icon = styled(MdDeleteForever)`
  width: 30px;
  height: 30px;
`;

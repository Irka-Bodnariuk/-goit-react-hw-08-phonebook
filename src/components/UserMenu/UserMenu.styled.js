import styled from 'styled-components';
import { IoLogOutOutline } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Button = styled.button`
  border-radius: 6px;

  border: none;
  color: black;
  background-color: #fff;

  font-weight: 700;
  margin: auto;
  &:hover {
    box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    color: white;
    background-color: orangered;
  }
`;
export const Icon = styled(IoLogOutOutline)`
  width: 30px;
  height: 30px;
`;

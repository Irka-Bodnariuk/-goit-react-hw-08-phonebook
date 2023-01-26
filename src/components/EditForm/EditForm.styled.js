import styled from 'styled-components';
import { HiX } from 'react-icons/hi';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Label = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background-color: #ff98471a;
  outline: none;
  &:focus {
    border: 1px solid #ff4500;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;

  border: none;
  color: black;
  background-color: #fff;
  box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-weight: 700;
  margin: auto;
  &:hover {
    box-shadow: none;
    color: white;
    background-color: orangered;
  }
`;
export const ButtonIcon = styled.button`
  margin-left: auto;
  display: flex;
  padding: 5px 5px;
  border-radius: 50px;
  color: orangered;
  background-color: #fff;

  border: none;

  font-weight: 700;
  &:hover {
    box-shadow: none;
    color: #fff;
    background-color: orangered;
    box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
export const Icon = styled(HiX)`
  width: 20px;
  height: 20px;
`;

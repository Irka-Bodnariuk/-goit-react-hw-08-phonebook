import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background-color: #ff98471a;
`;
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: none;
  color: white;
  background-color: #ff4500;

  border: none;

  font-weight: 700;
  margin: auto;
  &:hover {
    color: black;
    background-color: #fff;
    box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;

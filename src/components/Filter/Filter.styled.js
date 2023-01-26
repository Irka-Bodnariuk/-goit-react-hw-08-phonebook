import styled from 'styled-components';

export const Form = styled.form`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  gap: 6px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  outline: none;
  box-shadow: none;
  border-bottom: 3px solid #000;

  &:focus {
    border-bottom: 3px solid #ff4500;
  }
`;

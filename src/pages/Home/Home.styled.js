import styled from 'styled-components';
import { ImAddressBook } from 'react-icons/im';

export const Container = styled.div`
  margin: 0px auto 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 32px;
  max-width: 400px;
`;
export const Icon = styled(ImAddressBook)`
  width: 70px;
  height: 70px;
  color: orangered;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerInput = styled.input`
  height: 2rem;
  border-radius: 0.2rem;

  width: 40rem;
  border: 0;

  &::placeholder {
    padding: 0.5rem;
  }
`;
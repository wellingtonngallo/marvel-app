import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 300px;
  cursor: pointer;
  transition: filter 0.2s;

  img {
    height: 200px;
    width: 100%;
  }

  section.body {
    padding: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    filter: brightness(0.8);
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
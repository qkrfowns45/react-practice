import React from 'react';
import styled from 'styled-components';

const StyledHeaderButtonDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const Header = () => {
  return (
    <StyledHeaderButtonDiv backgroundColor="blue">
      <h1>헤더입니다!</h1>
    </StyledHeaderButtonDiv>
  );
};

export default Header;

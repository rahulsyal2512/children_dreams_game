import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  font-size: 25px;
  color: green;
  font-weight:bold;
  justify-content: center;
  align-items: center;
`;

const ThankYou = () => {
  return (
    <Container>
      Thank you! We are going to work hard to make our dreams come true.
    </Container>
  );
};

export default ThankYou;

import React, { Component } from "react";
import styled from "styled-components";
import { objects } from "./initialData";
import Items from "./Items";

const Container = styled.div`
  width: 70%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  background: green;
  margin: 10px;
`;

class DragItems extends Component {
  render() {
    return (
      <Container>
        {objects.map(object => (
          <Items object={object} />
        ))}
      </Container>
    );
  }
}

export default DragItems;

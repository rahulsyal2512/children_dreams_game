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
    const { handleItemDelete } = this.props;
    return (
      <Container>
        {objects.map(object => (
          <Items object={object} handleItemDelete={handleItemDelete} />
        ))}
      </Container>
    );
  }
}

export default DragItems;

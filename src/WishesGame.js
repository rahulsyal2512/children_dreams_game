import React, { Component } from "react";
import styled from "styled-components";
import DragItems from "./DragItems";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Target from "./Target";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;
const ChildrenContainer = styled.div`
  width: 400px;
  min-height: 100px;
  background: #fb00ff;
  padding: 20px;

  div.description {
    padding: 20px 20px;
    text-align: center;
    background: orange;
    word-break: break-word;
    height: 40px;
    align-items: center;
    display: flex;
  }

  div.flex {
    display: flex;
    justify-content: space-between;
  }

  img.image {
    width: 250px;
    margin-top: 10px;
  }

  div.wishes-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div.wish {
    width: 100px;
    height: 100px;
    background: white;
    margin: 10px 0px;
  }
`;

export default class WishesGame extends Component {
  handleItemDelete = id => {
    console.log("deleted", id);
  };
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <Container>
          <Target />

          <DragItems handleItemDelete={this.handleItemDelete} />
        </Container>
      </DndProvider>
    );
  }
}

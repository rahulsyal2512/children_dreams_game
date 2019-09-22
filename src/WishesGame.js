import React, { Component } from "react";
import styled from "styled-components";
import DragItems from "./DragItems";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Target from "./Target";
import {
  objects,
  miznaDreams,
  sahilDreams,
  annaDreams,
  harjotDreams
} from "./initialData";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export default class WishesGame extends Component {
  state = {
    objects
  };

  componentDidMount() {
    this.checkObjectLength();
  }

  componentDidUpdate() {
    this.checkObjectLength();
  }

  handleItemDelete = id => {
    this.setState(prevState => {
      const objects = prevState.objects;
      const index = objects.findIndex(item => item.id === id);
      console.log(index);
      objects.splice(index, 1);
      return objects;
    });
  };

  checkObjectLength = () => {
    if (this.state.objects.length === 0) {
      this.props.history.push("/completed");
    }
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

import React, { Component } from "react";
import styled from "styled-components";
import DragItems from "./DragItems";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Target from "./Target";
import { objects, data } from "./initialData";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  div.source {
    margin:auto 0px;
  }
  div.target {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 100vh;
  }
`;

export default class WishesGame extends Component {
  state = {
    objects,
    data
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
      objects.splice(index, 1);
      return objects;
    });
  };

  checkObjectLength = () => {
    if (this.state.objects.length === 0) {
      this.props.history.push("/completed");
    }
  };

  addDreams = (object, item) => {
    if (object.dreams[0].type !== item.type) {
      return;
    }
    this.setState(prevState => {
      const { data } = prevState;
      const index = data.findIndex(data => data.id === object.id);
      data[index].dreams.push(item);
      this.handleItemDelete(item.id);
      return prevState;
    });
  };

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <Container>
          <div className="source">
            <DragItems />
          </div>
          <div className="target">
            <Target addDreams={this.addDreams} />
          </div>
        </Container>
      </DndProvider>
    );
  }
}

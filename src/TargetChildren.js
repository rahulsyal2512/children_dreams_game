import React, { Component } from "react";
import styled from "styled-components";
import { DropTarget } from "react-dnd";

const ChildrenContainer = styled.div`
  width: 40%;
  min-height: 100px;
  background: #fb00ff;
  padding: 5px 15px;

  div.description {
    padding: 10px 20px;
    text-align: center;
    background: orange;
    word-break: break-word;
    height: 40px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  div.flex {
    padding: 0px 10px;
    display: flex;
    height: 80%;
    justify-content: space-between;
  }

  img.image {
    width: 60%;
    height: 93%;
    margin-top: 10px;
  }

  img.wish {
    width: 60%;
    height: 25%;
    margin: 10px 0px;
  }
`;

const WishesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const itemTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();

    if (monitor.didDrop()) {
      return;
    }

    props.addDreams(props.content, item.object);
  }
  // hover(props, monitor, component) {
  //   component.setState({ background: "red" });
  // }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

class WishesGame extends Component {
  handleDroppedWished = () => {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <WishesContainer>{this.renderDreams()}</WishesContainer>
      </div>
    );
  };
  renderDreams = () => {
    const { content, hovered } = this.props;
    console.log("asa",this.props);
    // const background = hovered ? "lightgreen" : "white";
    let images = [];
    for (let i = 0; i < 3; i++) {
      images.push(
        <img
          src={content.dreams[i] ? content.dreams[i].imageUrl : null}
          className="wish"
          style={{ background: hovered? "#bcffbc": "white" }}
        ></img>
      );
    }
    return images;
  };
  render() {
    const { content } = this.props;
    return (
      <ChildrenContainer key={content.id}>
        <div className="description">{content.title}</div>
        <div className="flex">
          <img src={content.imageUrl} className="image"></img>
          {this.handleDroppedWished()}
        </div>
      </ChildrenContainer>
    );
  }
}

export default DropTarget("item", itemTarget, collect)(WishesGame);

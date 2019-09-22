import React, { Component } from "react";
import styled from "styled-components";
import { DropTarget } from "react-dnd";

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
        <div className="wish"></div>
        <div className="wish"></div>
        <div className="wish"></div>
      </div>
    );
  };
  render() {
    const { content, connectDropTarget, hovered } = this.props;
    return (
      <ChildrenContainer key={content.id}>
        <div className="description">{content.title}</div>
        <div className="flex">
          <img src={content.imageUrl} className="image"></img>
          <div className="wishes-container">{this.handleDroppedWished()}</div>
        </div>
      </ChildrenContainer>
    );
  }
}

export default DropTarget("item", {}, collect)(WishesGame);

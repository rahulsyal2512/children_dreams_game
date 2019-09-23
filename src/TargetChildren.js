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
    justify-content: center;
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

  img.wish {
    width: 100px;
    height: 100px;
    background: white;
    margin: 10px 0px;
  }
`;

const WishesContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    const { content } = this.props;
    let images = [];
    for (let i = 0; i < 3; i++) {
      images.push(
        <img
          src={content.dreams[i] ? content.dreams[i].imageUrl : null}
          className="wish"
        ></img>
      );
    }
    return images;
  };
  //   handleDroppedWished = () => {
  //     const { connectDropTarget, content } = this.props;
  //     return connectDropTarget(
  //       <div>
  //         {content.dreams.map(dream => {
  //           return <div className="dream"></div>;
  //         })}
  //       </div>
  //     );
  //   };
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

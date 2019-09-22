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

  img.wish {
    width: 100px;
    height: 100px;
    background: white;
    margin: 10px 0px;
  }
`;

const itemTarget = {
  drop(props, monitor, component) {
    console.log(props, monitor);

    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    // You can do something with it
    // ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
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
    return connectDropTarget(<div>{this.renderDreams()}</div>);
  };
  renderDreams = () => {
    const { content } = this.props;

    for (let i = 0; i < 3; i++) {
      return (
        <img
          src={content.dreams[i] ? content.dreams[i].imageUrl : ""}
          className="wish"
        ></img>
      );
    }
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
    console.log(this.props.content);
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

export default DropTarget("item", itemTarget, collect)(WishesGame);

import React, { Component } from "react";
import styled from "styled-components";
import { DragSource } from "react-dnd";

const Image = styled.img`
  width: 50px;
  height: 50px;
  background: white;
  padding: 10px;
  margin: 20px;
`;

const itemSource = {
  beginDrag(object) {
    return object;
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class DragItems extends Component {
  render() {
    const { isDragging, connectDragSource, object } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div>
        <Image src={object.imageUrl} style={{ opacity }}></Image>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(DragItems);

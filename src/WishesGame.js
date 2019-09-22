import React, { Component } from "react";
import styled from "styled-components";
import Data from "./initialData";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
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
  render() {
    return (
      <Container>
        {Data.map(data => (
          <ChildrenContainer key={data.id}>
            <div className="description">{data.title}</div>
            <div className="flex">
              <img src={data.imageUrl} className="image"></img>
              <div className="wishes-container">
                <div className="wish"></div>
                <div className="wish"></div>
                <div className="wish"></div>
              </div>
            </div>
          </ChildrenContainer>
        ))}
      </Container>
    );
  }
}

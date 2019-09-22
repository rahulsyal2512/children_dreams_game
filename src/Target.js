import React, { Component } from "react";
import { data } from "./initialData";
import TargetChildren from "./TargetChildren";

export default class WishesGame extends Component {
  render() {
    return data.map(content => <TargetChildren content={content} />);
  }
}

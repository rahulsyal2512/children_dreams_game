import React, { Component } from "react";
import { data } from "./initialData";
import TargetChildren from "./TargetChildren";

export default class Target extends Component {
  render() {
    const { addDreams } = this.props;
    return data.map(content => (
      <TargetChildren content={content} addDreams={addDreams} />
    ));
  }
}

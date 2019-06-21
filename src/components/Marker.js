import React, { Component } from "react";
import "./Marker.css";

class Marker extends Component {
  render() {
    const { isSelected, price } = this.props;

    return <div className={`marker ${isSelected && "selected"}`}>{price}</div>;
  }
}

export default Marker;

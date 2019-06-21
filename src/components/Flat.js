import React from "react";
import "./Flat.css";

class Flat extends React.Component {
  render() {
    const { image, name, price, flat, handleClick } = this.props;
    const style = {
      backgroundImage: `url(${image})`
    };
    return (
      <div className="flat" onClick={() => handleClick(flat)}>
        <div className="flat-picture" style={style} />
        <div className="flat-title">
          {name} - {price}
        </div>
      </div>
    );
  }
}

export default Flat;

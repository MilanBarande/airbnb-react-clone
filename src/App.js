import React from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";

import Flat from "./components/Flat";
import Marker from "./components/Marker";

class App extends React.Component {
  state = {
    flats: [],
    allFlats: [],
    selectedFlat: null,
    search: ""
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          flats: data,
          allFlats: data
        })
      );
  }

  selectFlat = flat => {
    this.setState({ selectedFlat: flat });
  };

  handleSearchInput = event => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter(flat =>
        flat.name.includes(event.target.value)
      )
    });
  };

  render() {
    console.log(this.state.search);

    const paris = {
      lat: 48.866667,
      lng: 2.333333
    };
    return (
      <div className="app">
        <div className="main">
          <input
            className="search"
            type="text"
            value={this.state.search}
            onChange={this.handleSearchInput}
          />
          <div className="flats">
            {this.state.flats.map(flat => (
              <Flat
                image={flat.imageUrl}
                name={flat.name}
                price={flat.price}
                flat={flat}
                handleClick={this.selectFlat}
                key={flat.id}
              />
            ))}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={this.state.selectedFlat || paris} zoom={13}>
            {this.state.flats.map(flat => (
              <Marker
                price={flat.price}
                lat={flat.lat}
                lng={flat.lng}
                key={flat.id}
                isSelected={flat === this.state.selectedFlat}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

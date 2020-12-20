import React from "react";
import Row from "../row";
import { PlanetDetails, PlanetList } from "../sw-components";

export default class PlanetsPage extends React.Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    console.log(this.state.selectedItem);
    return (
      <div>
        <Row
          leftColumn={<PlanetList onItemSelected={this.onItemSelected} />}
          rightColumn={<PlanetDetails itemId={this.state.selectedItem} />}
        />
      </div>
    );
  }
}

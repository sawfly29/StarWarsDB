import React from "react";
import Row from "../row";
import { StarshipDetails, StarshipList } from "../sw-components";

export default class StarshipPage extends React.Component {
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
          leftColumn={<StarshipList onItemSelected={this.onItemSelected} />}
          rightColumn={<StarshipDetails itemId={this.state.selectedItem} />}
        />
      </div>
    );
  }
}

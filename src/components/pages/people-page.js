import React from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";

export default class PeoplePage extends React.Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <div>
        <Row
          leftColumn={<PersonList onItemSelected={this.onItemSelected} />}
          rightColumn={<PersonDetails itemId={this.state.selectedItem} />}
        />
      </div>
    );
  }
}

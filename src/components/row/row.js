import React, { Component } from "react";
import './row.css'

export default class Row extends Component {
  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">{this.props.leftColumn}</div>
        <div className="col-md-6">{this.props.rightColumn}</div>
      </div>
    );
  }
}
import React, { Component } from "react";
import './row.css'
import PropTypes from 'prop-types'

// export default class Row extends Component {

//   render() {
//     return (
//       <div className="row mb2">
//         <div className="col-md-6">{this.props.leftColumn}</div>
//         <div className="col-md-6">{this.props.rightColumn}</div>
//       </div>
//     );
//   }
// }  

const Row = ({leftColumn, rightColumn}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{leftColumn}</div>
      <div className="col-md-6">{rightColumn}</div>
    </div>
  );
}

Row.propTypes = {
    leftColumn: PropTypes.node,
    rightColumn: PropTypes.node
  }
  export default Row
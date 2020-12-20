import React from "react";
//import React, { Component } from "react";
import PropTypes from 'prop-types'

import "./item-list.css";

const ItemList = (props) => {
  const {data, onItemSelected, children: renderLabel} = props;

  const items =  data.map((item) => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li
          className="list-group-item"
          onClick={() => onItemSelected(id)}
          key={id}
        >
          {label}
        </li>
      );
    });
ItemList.defaultProps = {
  onItemSelected: () => {}
}
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func.isRequired
}
 return <ul className="item-list list-group">{items}</ul>;
}

  export default ItemList
//  class ItemListClass extends Component {


//   renderItems(arr) {
//     return arr.map((item) => {
//       const { id } = item;
//       console.log(this.props)
//       const label = this.props.children(item);

//       return (
//         <li
//           className="list-group-item"
//           onClick={() => this.props.onItemSelected(id)}
//           key={id}
//         >
//           {label}

//         </li>
//       );
//     });
//   }

//   render() {
//     const {data} = this.props
   
//     const items = this.renderItems(data);
//     return <ul className="item-list list-group">{items}</ul>;
//   }
// }

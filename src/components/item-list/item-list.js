import React from "react";
//import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import withData from '../hoc-helpers'


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

 return <ul className="item-list list-group">{items}</ul>;
  
}

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


const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople)
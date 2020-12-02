import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'

import './item-details.css';

const Record = ({item, field, label}) => {
  return (
<li className='list-group-item'>
    <span className='term'>{label} </span>
    <span>{item[field]}</span>
</li>
  );
};

export {
  Record
}

export default class ItemDetails extends Component {

  swapiService = new SwapiService();
  state = {
    item: null
  }
  componentDidMount(){
    this.updateItem()
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }


  componentDidUpdate(prevProps){
    if (this.props.itemId !== prevProps.itemId){
      this.updateItem()
    }
  }
  updateItem() {
    const {itemId, getData} = this.props;
    if (!itemId){return}
   
    getData(itemId)
    .then(item => {this.setState({item})})
  }

  render() {
    if (!this.state.item){return (<span>Select item from a list!</span>)}
    const item = this.state.item
    const {id, name,  gender, birthYear, eyeColor} = item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={this.props.getImageUrl(id)} alt='char_image'/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child, idx) => {return React.cloneElement(child, {item})})}
          </ul>
        </div>
      </div>
    )
  }
}
//
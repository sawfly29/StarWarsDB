import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'
import ErrorIndicator from '../error-indicator'


import './app.css';

class App extends React.Component{
  state = {
    showRandomPlanet: true,

    applicationError: false
  }
 
  componentDidCatch(){
    console.log('erroooor')
    this.setState({applicationError: true})
  }

  render(){
    if (this.state.applicationError){return <ErrorIndicator />}

    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}

// const AppFunc = () => {
//   return (
//     <div>
//       <Header />
//       <RandomPlanet />

//       <div className="row mb2">
//         <div className="col-md-6">
//           <ItemList />
//         </div>
//         <div className="col-md-6">
//           <PersonDetails />
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
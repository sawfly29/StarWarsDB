import React from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";
import {withRouter} from 'react-router-dom'

 const PeoplePage = ({history, match}) => {
   const  { id } = match.params;
   console.log(match.params)
    return (
      <div>
        <Row
          leftColumn={<PersonList onItemSelected={(id) => history.push(id)} />}
          rightColumn={<PersonDetails itemId={id} />}
        />
      </div>
    )
  }

export default withRouter(PeoplePage)
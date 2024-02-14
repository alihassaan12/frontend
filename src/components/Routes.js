import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FamilyList from './components/FamilyList';
import FamilyDetails from './components/FamilyDetails';
import FamilyForm from './components/FamilyForm';
import PeopleList from './components/PeopleList';
import PersonDetails from './components/PersonDetails';
import PersonForm from './components/PersonForm';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/families" exact component={FamilyList} />
        <Route path="/families/:id" component={FamilyDetails} />
        <Route path="/add-family" component={FamilyForm} />
        <Route path="/people" exact component={PeopleList} />
        <Route path="/people/:id" component={PersonDetails} />
        <Route path="/add-person" component={PersonForm} />
      </Switch>
    </Router>
  );
};

export default Routes;

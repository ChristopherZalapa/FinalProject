import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EntryIndex from '../pages/EntryIndex';

export default (
  <Switch>
    <Route path = '/entries' component = {EntryIndex}/>
  </Switch>
)
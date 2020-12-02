import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import EntryIndex from '../pages/EntryIndex';
import UserIndex from '../pages/UserIndex';

export default (
  <Switch>
    <Route path = '/entries' component = {EntryIndex}/>
    <Route path = '/users' component = {UserIndex}/>
    <Route path = '/' component = {HomePage}/>
  </Switch>
)
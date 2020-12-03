import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import EntryIndex from '../pages/EntryIndex';
import UserIndex from '../pages/UserIndex';
import EntryFormPage from '../pages/EntryFormPage';
import UserFormPage from '../pages/UserFormPage';
import EntryShowPage from '../pages/EntryShowPage'

export default (
  <Switch>
    <Route path = '/entries/:entry/id' component = {EntryShowPage}/>
    <Route path = '/entries/:entry/:entryid' component = {EntryFormPage}/>
    <Route path = '/users/:user/:userid' component = { UserFormPage } />
    <Route path = '/entries' component = {EntryIndex}/>
    <Route path = '/users' component = {UserIndex}/>
    <Route path = '/' component = {HomePage}/>
  </Switch>
)
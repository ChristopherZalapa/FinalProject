import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import EntryIndex from '../pages/EntryIndex';
import UserIndex from '../pages/UserIndex';
import EntryFormPage from '../pages/EntryFormPage';
import UserFormPage from '../pages/UserFormPage';
import EntryShowPage from '../pages/EntryShowPage';


export default (
  <Switch>
    <Route path = '/entryshowpage/:id' component = {EntryShowPage}/>
    <Route path = '/entriesForm' component = {EntryFormPage}/>
    <Route path = '/users/:user/:userId' component = { UserFormPage } />
    <Route path = '/entries' component = {EntryIndex}/>
    <Route path = '/users' component = {UserIndex}/>
    <Route path = '/' component = {HomePage}/>
  </Switch>
)
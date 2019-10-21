import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import MeetupDetail from '../pages/MeetupDetail';
import MeetupForm from '../pages/MeetupForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route
        path="/meetup/details/:meetup_id"
        component={MeetupDetail}
        isPrivate
      />
      <Route path="/meetup/new" component={MeetupForm} isPrivate />
      <Route path="/meetup/edit/:meetup_id" component={MeetupForm} isPrivate />
    </Switch>
  );
}

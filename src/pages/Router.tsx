import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { Loading } from './Loading';
import { SearchPage } from './SearchPage';
import { Sherlcoks } from './Community/Sherlocks';
import { BookDetail } from './BookDetail';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/loading" component={Loading} />
      <Route path="/search" component={SearchPage} />
      <Route path="/community/sherlocks" component={Sherlcoks} />
      <Route path="/bookdetail" component = {BookDetail} />
      <Route path="/" component={HomePage} exact />
      <Route path="/">

        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

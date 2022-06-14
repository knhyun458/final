import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { Loading } from './Loading';
import { SearchPage } from './SearchPage';
import { Community } from './Community/Sherlocks';
import { CommunityList } from './Community/CommunityList';
import { BookDetail } from './BookDetail';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/loading" component={Loading} />
      <Route path="/search" component={SearchPage} />
      <Route path="/community/:id" component={Community} exact />
      <Route path="/community" component={CommunityList} />
      <Route path="/bookdetail/:id" component={BookDetail} exact/>
      <Route path="/" component={HomePage} exact />
      <Route path="/">

        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

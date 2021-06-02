import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../imports/components/history';

import './main.css';
import 'antd/dist/antd.css';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import { LottieLoadings } from '../imports/components/LottieLoadings';

import HeaderX from '../imports/components/header';
import FooterX from '../imports/components/footer';

const Home = React.lazy(() => import('../imports/ui/pages/home'));
const DetailedView = React.lazy(() => import('../imports/ui/pages/detailedview'));
const Missing = React.lazy(() => import('../imports/ui/pages/missing'));

Meteor.startup(() => {

  var head = document.getElementsByTagName('head')[0];

  var scripted = document.createElement('script');
  scripted.setAttribute('type', 'text/json');
  scripted.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js');
  head.appendChild(scripted);

  var style2 = document.createElement('link');
  style2.rel = "stylesheet";
  style2.type = "text/css";
  style2.href = "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Raleway&display=swap";
  head.appendChild(style2);

  const Loading = () => (
    <Row justify='space-around' align="middle" style={{ height: '100vh' }}>
      <Col span={4}>
        <LottieLoadings />
      </Col>
    </Row>
  );
  
  Tracker.autorun(() => {
    const routes = (
      <>
        <Router history={history}>
          <HeaderX/>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' render={() => {
                return <Home/>
              }}/>
              <Route exact path='/pedagogi/:_id' render={( {match} ) => {
                return <DetailedView match={match} />
              }}/>
              <Route exact path='/teknologi/:_id' render={( {match} ) => {
                return <DetailedView match={match} />
              }}/>
              <Route path='*'>
                <Missing/>
              </Route>
            </Switch>
          </Suspense>
          <FooterX/>
        </Router>
      </>
    );
    render(routes, document.getElementById('react-target'));
  })

});

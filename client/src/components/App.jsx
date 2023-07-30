import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import StreamingPage from './StreamingPage';
import ProfilePage from './ProfilePage';
import NavBar from './Navbar';

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!isLoggedIn ? <LoginPage /> : <Redirect to="/stream" />}
        </Route>
        <Route path="/register">
          {!isLoggedIn ? <RegisterPage /> : <Redirect to="/stream" />}
        </Route>
        <Route path="/stream">
          {isLoggedIn ? (
            <>
              <NavBar />
              <StreamingPage />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/profile">
          {isLoggedIn ? (
            <>
              <NavBar />
              <ProfilePage />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;

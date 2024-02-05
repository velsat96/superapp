// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Signup onSignup={handleLogin} />
          </Route>
          {/* Add other routes for different features */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

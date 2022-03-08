import React from "react";
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function RouterReact() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">About</Link>
            </li>
            <li>
              <Link to="/contact">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project" element={<App /> } />
            <Route path="/contact" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}
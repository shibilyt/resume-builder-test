import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>create</div>
          </Route>
          <Route path="*">Invalid URL</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

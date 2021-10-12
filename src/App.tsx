import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="container-sm py-4 min-vh-100">
      <header className="pb-2">
        <h1>Resume Builder</h1>
      </header>
      <main className="border rounded p-4">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Create />
            </Route>
            <Route path="/edit" exact>
              <Edit />
            </Route>
            <Route path="*">Invalid URL</Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

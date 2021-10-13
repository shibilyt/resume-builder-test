import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import View from "./pages/View";
import { ResumeFormType } from "./store";

function App() {
  const resumeDataString = localStorage.getItem("resumeData");
  const resumeData: ResumeFormType | null = resumeDataString
    ? JSON.parse(resumeDataString)
    : null;
  return (
    <div className="container-sm py-4 min-vh-100">
      <header className="pb-2">
        <h1>Resume Builder</h1>
        <nav className="nav">
          <div className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              View
            </NavLink>
          </div>
          {!resumeData && (
            <div className="nav-item">
              <NavLink
                to="/create"
                className="nav-link"
                activeClassName="active"
              >
                Create
              </NavLink>
            </div>
          )}
          <div className="nav-item">
            <NavLink to="/edit" className="nav-link" activeClassName="active">
              Edit
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="border rounded p-4">
        <Switch>
          <Route path="/" exact>
            <View />
          </Route>
          <Route path="/create" exact>
            <Create />
          </Route>
          <Route path="/edit" exact>
            <Edit />
          </Route>
          <Route path="*">Invalid URL</Route>
        </Switch>
        <Toaster />
      </main>
    </div>
  );
}

export default App;

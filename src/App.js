import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideo from "./RecommendedVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              {/* <h1>Search page 🔎</h1> */}
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

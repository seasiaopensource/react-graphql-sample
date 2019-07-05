import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import Overview from "./pages/Overview";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Route
          path="/"
          exact
          render={() => {
            return <Redirect to="/vehicle/overview/5689" />;
          }}
        />
        <Route path="/vehicle/overview/:id" component={Overview} />
      </Container>
    </div>
  );
}

export default App;

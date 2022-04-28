import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard></Dashboard>}
        />
        <Route
          exact
          path="/product"
          element={<Dashboard></Dashboard>}
        />
        <Route path="/cart" exact element={<CartDetail></CartDetail>} />
      </Routes>
    </Container>
  );
}

export default App;

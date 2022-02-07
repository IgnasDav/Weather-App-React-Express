import { createMemoryHistory } from "history";
import App from "./App";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
//These do not work because it throws Cannot read properties of undefined (reading 'pathname')
test("home location works", () => {
  const history = createMemoryHistory();
  const homeLocation = "/";
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(homeLocation)).toBeInTheDocument();
});
test("landing on a bad page", () => {
  const history = createMemoryHistory();
  const route = "/hello";
  history.push(route);
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(route)).toBeInTheDocument();
});
test("landing in single forecast page", () => {
  const history = createMemoryHistory();
  const route = "/forecast/103098030";
  history.push(route);
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(route)).toBeInTheDocument();
});

import { screen } from "@testing-library/react";
import { renderWithStore } from "../../lib/test-utils";
import App from "./App";

test("renders learn react link", () => {
  renderWithStore(<App />);
  const [link, title] = screen.getAllByText(/Todoz/i);
  expect(link).toHaveAttribute("href", "#todoz");
  // TODO test title is H1 ??
});

test("App snapshot", () => {
  const { container } = renderWithStore(<App />);
  expect(container).toMatchSnapshot();
});

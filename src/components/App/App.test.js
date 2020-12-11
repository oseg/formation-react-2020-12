import { screen } from "@testing-library/react";
import { renderWithStore } from "../../lib/test-utils";
import App from "./App";

// TODO How to mock local module
jest.mock("../../lib/api.js", () => ({
  fetchTasks: async () => [
    {
      id: "test-task",
      label: "fake task",
      tagLabels: ["test", "fake"],
      done: false,
    },
  ],
}));

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

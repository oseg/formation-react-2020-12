import { screen } from "@testing-library/react";
import { renderWithStore } from "../../lib/test-utils";
import App from "./App";

// Mock API for faster tests (still not so fast)
jest.mock("../../lib/api.js", () => ({
  fetchTasks: async () => {
    console.log("mocked fetchTasks");
    return [
      {
        id: "test-task",
        label: "fake task",
        tagLabels: ["test", "fake"],
        done: false,
      },
    ];
  },
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

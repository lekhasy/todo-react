import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./redux/Store";

test("renders learn react link", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Todo app/i);
  expect(linkElement).toBeInTheDocument();
});

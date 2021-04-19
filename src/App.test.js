import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Todo app/i);
  expect(linkElement).toBeInTheDocument();
});

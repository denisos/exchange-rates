import { render, screen } from "@testing-library/react";
import { ExchangeRate } from "../ExchangeRate";
import { Provider } from "react-redux";
import { store } from "../../store/store";

test("renders title", () => {
  render(<Provider store={store}>
      <ExchangeRate />
    </Provider>);
  const linkElement = screen.getByText(/Exchange Rates/i);
  expect(linkElement).toBeInTheDocument();
});

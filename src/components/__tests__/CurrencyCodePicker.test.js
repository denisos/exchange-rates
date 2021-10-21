import { render, screen } from "../../test-utils";
import { CurrencyCodePicker } from "../CurrencyCodePicker";

test("renders title", () => {
  render(<CurrencyCodePicker currencyCode={"USD"} supportedCurrencies={["USD", "JPY"]} />);

  const jpyoption = screen.getByText(/JPY/i);
  expect(jpyoption).toBeInTheDocument();
  const usdoption = screen.getByText(/USD/i);
  expect(usdoption).toBeInTheDocument();
});

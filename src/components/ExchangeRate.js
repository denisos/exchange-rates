import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { 
  changeCurrencyCode,
  getAmount, 
  getCurrencyData, 
  getCurrencyCode, 
  supportedCurrencies 
} from "../store/rates";

export function ExchangeRate() {
  const dispatch = useDispatch();

  // useSelector takes a function and calls with state and allows you to 
  //  return the part of state you want 
  // useSelector reads a value from the store state and subscribes to updates
  // any time these values change the component is re-rendered
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  // fetch the exchange rates the first time
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode));
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}

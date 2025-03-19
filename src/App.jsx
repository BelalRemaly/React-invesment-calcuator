import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 15000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10
  })
  const dataIsValid = inputValue.duration >= 1;
  function handleChange(identifier, newValue) {
    setInputValue(previusValue => {
      return {
        ...previusValue,
        [identifier]: +newValue
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChangeValue={handleChange} inputValue={inputValue} />
      {!dataIsValid && <p className="center">please input valid duration</p>}
      {dataIsValid && <Results input={inputValue} />}
    </>
  )
}

export default App

import BankContextProvider from "./components/BankContextProvider";
import Bank from "./components/Bank";

function App() {
  return (
    <BankContextProvider>
      <Bank/>
    </BankContextProvider>
  );
}

export default App;

import { createContext } from "react";
import ChildA from "./ChildA";

const NameContext = createContext();
  const SirNameContext = createContext();
function App() {
  const name = "Satyawan";
  const sirName = "Panchal";

  
  return (
    <NameContext.Provider value={name}>
      <SirNameContext.Provider value={sirName}>
        <ChildA />
      </SirNameContext.Provider>
    </NameContext.Provider>
  );
}
export default App
export {NameContext,SirNameContext}

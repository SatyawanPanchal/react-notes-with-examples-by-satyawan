import ChildA from "./components/ChildA";
import { createContext } from "react";
import React from "react";

const userContext = createContext();
const sirnameContext = createContext();
function App() {
  const name = "satyawan";
  const sirname = "panchal";
  return (
    <userContext.Provider value={name}>
      <sirnameContext.Provider value={sirname}>
        <ChildA/>
      </sirnameContext.Provider>
    </userContext.Provider>
  );
}

export default App;
export{userContext,sirnameContext}

# React + Vite
  we will take taking 4 files here 
   
   App.jsx ->ChildA->ChildB->ChildC

in App.jsx we have two variables that we need to pass to childC 
without passing it through ChildB

   we want to pass some values from App.jsx to ChildC (which is a child of ChildA)

   so for this we will use three main things
   1. createContext      

const data=createContext();  // data will contain value of name
const data=createContext();  // data1 will contain value of gender

   2. Provider     
   <data.Provider value={name}>
<data1.Provider>
<ChildA/>       // now value will be available to ChildA and all its Children 
                //components
</data1.Provider>
   </data.provider>
   3. useContext hook
   we simply will import the contexts to childC ,which were exported from 
   App.js and will use them
   
   import {data,data1} from './App'

   const name=useContext(data1);
   const gender= useContext(data)



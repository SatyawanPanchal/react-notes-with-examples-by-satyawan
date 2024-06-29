 
import { useContext } from 'react'
import { NameContext,SirNameContext } from './App'

function ChildC() 
{
    const name=useContext(NameContext);
    const sirname=useContext(SirNameContext);
  return (
    <div>
<h1>{name}</h1>
<h2>{sirname}</h2>      
    </div>
  )
}

export default ChildC
import {React , useContext} from 'react'
import { userContext,sirnameContext } from '../App'

const ChildC = () => {
    const name=useContext(userContext)
    const sirname=useContext(sirnameContext)
  return (
    <div>
      <p>i am in ChildC</p>
      <span>my name is {name} and my sir name is {sirname}</span>
    </div>
  )
}

export default ChildC

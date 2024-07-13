import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const {transactions,loading} = useContext(GlobalContext)
  const amounts = transactions.map(each=>each.amount)
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
  console.log(loading)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  )
}

export default Balance

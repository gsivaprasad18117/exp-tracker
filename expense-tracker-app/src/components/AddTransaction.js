import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
    const [text,setText] = useState("")
    const [amount,setAmount] = useState("")
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e=>{
      e.preventDefault()
      const newTransaction = {
        id:Math.floor(Math.random()*500),
        text,
        amount:+amount
      }
      addTransaction(newTransaction)
      setText("")
      setAmount("")
    }

  return (
    <>
      <h3>Add new Transaction</h3>
      <form id='form' onSubmit = {onSubmit}>
        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input
                type='text' 
                placeholder='Enter text...'
                value = {text}
                onChange = {(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label htmlFor = "amount">
                Amount<br/>
                {"{expense - negative, positive - income}"}
            </label>
            <input
                type='number' 
                placeholder='Enter amount...'
                value = {amount}
                onChange = {(e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction

import React,{useState,useContext} from 'react'
import Modal from 'react-modal'
import ExpenseItems from './ExpenseModalItems'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const {transactions,loading} = useContext(GlobalContext)
  const [modalIsOpen,setIsOpen] = useState(false)
  const amounts = transactions.map(each=>each.amount)
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)

  const openModal = ()=>{
    setIsOpen(true)
  }

  const closeModal = ()=>{
    setIsOpen(false)
  }
  return (
    <div className='balance-container'>
      <div>
        <h4>Your Balance</h4>
        <h1>₹{total}</h1>
      </div>
      <button className='new-expense-btn' onClick = {openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        ><ExpenseItems closeModal = {closeModal}/>
      </Modal>
    </div>
  )
}

export default Balance

import { useState } from 'react';
import Modal from 'react-modal'
import { IoArrowUpCircle ,IoArrowDownCircle  } from "react-icons/io5";
import TransactionItemModal from './TransactionItemModal';

const ExpenseItems = (props)=>{
    const {closeModal} = props
    const [modalIsOpen,setIsOpen] = useState(false)
    const [type,setType] = useState("")
    const openModal = ()=>{
        setIsOpen(true)
    }
    const bot = e=>{
        setType(e.target.id)
        openModal()
    }
    return(
        <div className='balance-modal-container'>
            <div className='balance-transaction-container'>
                <div className='balance-modal-item' onClick={bot}>
                    <button className='balance-modal-ico'><IoArrowDownCircle /></button>
                    <p id = "Add Expense">Add Expense</p>
                </div>
                <div className='balance-modal-item' onClick={bot}>
                    <button className='balance-modal-ico'><IoArrowUpCircle  /></button>
                    <p id = "Add Income">Add Income</p>
                </div>
            </div>
            <button className='balance-modal-close' onClick={closeModal}>close</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}><TransactionItemModal type = {type}  closeModal = {closeModal}/></Modal>
        </div>
    )
}

export default ExpenseItems
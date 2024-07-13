import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({each}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const classItem = each.amount<0?"minus":"plus"
  return (
    <li className={`${classItem}`}>
        {each.text} <span>{each.amount}</span><button className='delete-btn' onClick={()=>deleteTransaction(each._id)}>x</button>
    </li>
  )
}

export default Transaction

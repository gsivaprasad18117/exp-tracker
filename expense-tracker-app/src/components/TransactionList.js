import React,{useContext,useEffect} from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../Context/GlobalState'

const TransactionList = () => {
  const {transactions,getTransactions,loading,error} = useContext(GlobalContext)
  console.log(error)

  useEffect(()=>{
    getTransactions()
  },[])
  
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(each=>(
          <Transaction each = {each} key = {each._id}/>
        ))}
        
      </ul>
    </div>
  )
}

export default TransactionList
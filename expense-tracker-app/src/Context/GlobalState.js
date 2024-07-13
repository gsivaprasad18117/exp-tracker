import React,{createContext,useReducer} from 'react'
import axios from 'axios'
import AppReducer from './AppReducer.js'

const initialState = {
    transactions:[],
    error:null,
    loading:true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    const url = "/api/v1/transactions"

    const getTransactions = async()=>{
        try{ 
            const response = await axios.get(`${url}`)

            dispatch({
                type:"GET_TRANSACTION",
                payload:response.data.data
            })
        }catch(e){
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:e.response.data.error
            })
        }
    }

    const deleteTransaction= async(id)=>{
        
        try{
            await axios.delete(`${url}/${id}`)
            dispatch({
                type:"DELETE_TRANSACTION",
                payload:id
            })
        }catch(e){
            dispatch({
                type:"TRANSACTION_ERROR",
            })
        }
    }

    const addTransaction = async (transaction)=>{
        
        try{
            const options = {
                headers:{
                    "Content-type":"application/json"
                }
            }
            const response = await axios.post(url,transaction,options)
            dispatch({
                type:"ADD_TRANSACTION",
                payload:response.data.data
            })
        }catch(e){
            dispatch({
                type:"TRANSACTION_ERROR",
            })
        }
        
    }

    return (<GlobalContext.Provider value = {{transactions:state.transactions,
                                                deleteTransaction,
                                                addTransaction,
                                                getTransactions,
                                                error:state.error,
                                                loading:state.loading}}>{children}</GlobalContext.Provider>)
}
const Transaction = require('../models/Transaction')

exports.getTransactions = async (req,res,next)=>{
    try{
        const transactions = await Transaction.find()
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        })
    }catch(e){
        return res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}

exports.addTransaction = async (req,res,next)=>{
    try{
        const newTransaction = await Transaction.create(req.body)

        res.status(201).json({
            data:newTransaction,
            success:true
        })
    }catch(e){
        if(e.name==="ValidationError"){
            const messages = Object.values(e.errors).map(each=>each.message)
            return res.status(400).json({
                success:false,
                error:messages
            })
        }else{
            return res.status(500).json({
                success:false,
                error:"Server Error"
            })
        }
    }

}

exports.deleteTransaction = async (req,res,next)=>{
    try{
        const transactions = await Transaction.findById(req.params.id)
        if(!transactions){
            return res.status(404).json({
                error:"No transaction found"
            })
        }
        await Transaction.deleteOne({_id:req.params.id})
        return res.status(200).json({
            success:true,
            data:"Transaction deleted Successfully"
        })
    }catch(e){
        return res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}
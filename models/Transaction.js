const mongoose = require("mongoose")

const TransactionSchema = mongoose.Schema(
    {
        text:{
            type:String,
            trim:true,
            required:[true,"Please add some text"]
        },
        amount:{
            type:Number,
            trim:true,
            required:[true,"Please add transaction amount"]
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
)

const Transaction =  mongoose.model("Transactions",TransactionSchema)

module.exports = Transaction
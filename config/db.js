const express = require('express')
const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb connected: ${connect.connection.host}`.cyan.underline.bold)
    }catch(e){
        console.log(`Error:${e.message}`.red)
        process.exit(1)
    }
    
}

module.exports = connectDB
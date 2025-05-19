const mongoose=require('mongoose');
const dbConnection=()=>{
    mongoose.connect(process.env.DB_URI)
        .then((conn)=>{
            console.log(`connect with db : ${conn.connection.host}`)
        })
        .catch((err)=>{
            console.log(`data base error ${err}`)
        })
}

module.exports={
    dbConnection
}
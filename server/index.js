const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

mongoose.connect('mongodb+srv://ashish123:ashish123@cluster0.ymy9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
)

const connectdb = mongoose.connection

connectdb.on('open',()=>{
    console.log('Db is Connected')
})

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoute)

app.use("/api/auth", authRoute)


app.listen(5000,()=> console.log('App running on 5000 port'))
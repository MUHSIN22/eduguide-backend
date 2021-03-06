const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const  bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')


// Configuration
app.use(bodyParser.json())
app.use(cors({
    origin:"*"
}))

// Import routes
const authRoute = require('./routes/auth')
const mechines = require('./routes/postMechines/postMechine')
const workers = require('./routes/postWorkers/postWorkers');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post')

// Middlewares
// app.use('/api/auth',authRoute);
app.use('/api/auth',authRoute)
app.use('/api/mechines',mechines)
app.use('/api/workers',workers)
app.use('/api/user',userRouter);
app.use('/api/post',postRouter)



// Middlewares
// app.use('/api/auth',authRoute);
app.use('/api/v1/auth',authRoute)


// Start server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server started and running on port 5000");
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("Database connected successfully");
    })
})


const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:3000"
}));

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header("Access-Control-Allow-HeaderS","Origin, X-Requested-With,Content-Type,Accept");
//     next();
// })
connectDB();




app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Middleware in Node.js, particularly in the context of Express.js, refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform various tasks such as:

// Executing any code.
// Modifying the request and response objects.
// Ending the request-response cycle.
// Calling the next middleware function in the stack.
// like when we do any changes in file then nodemon help us to restart server
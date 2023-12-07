const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = require('./app')

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
        console.log(`Error : ${err}`);
        console.log(`Shutting down the server due to Uncaught Exception`);
        process.exit(1);
})


// env config
dotenv.config()

//mogodb connection
connectDB();

//Port
const PORT = process.env.PORT || 8080

//listen

const server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
})



// Unhandled Promises Rejection

process.on("unhandledRejection", err => {
        console.log(`Error: ${err}`);
        console.log(`Shutting down the server due to Unhanled Promise Rejection`);
        server.close(() => {
                process.exit(1);
        })
})
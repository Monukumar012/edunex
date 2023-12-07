const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser')





//Rest Object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.set('view engine', 'ejs')




//Router import
const userRoutes = require('./routes/userRoutes')
const internshipRoutes = require('./routes/internshipRoutes')
const applicationRoutes = require('./routes/applicationRoutes')
//routes-use
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/admin', internshipRoutes)
app.use('/api/v1/application', applicationRoutes)




//middlewares for errors
app.use(errorMiddleware);

module.exports = app;
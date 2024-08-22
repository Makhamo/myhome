const express = require('express');
const app = express()
const app1 = express(),
bodyparser = require('body-parser');

require('express-async-errors')

const db = require('./db');
employeesRoute = require('./controller/employees.controller');

const db1 = require('./db');
usersRoute = require('./controller/users.controller');


//------------------------------employees(syntex.err)---------------------------------------------------
app.use(bodyparser.json())
app.use('/api/employees', employeesRoute);
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')

})
//------------------------------users(syntex.err)---------------------------------------------------
app1.use(bodyparser.json())
app1.use('/api/users', usersRoute);
app1.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')

})

//---------------------------------end---------------------------------------------------



db.query("SELECT 1")
.then(() => {
    console.log('database connected successfully.')
    app.listen(3000, () => console.log('server started at port 3000'));
   
    
})
//-------------------------------------------------------------------------------------
db1.query("SELECT 1")
.then(() => {
    console.log('database connected successfully.')
    app1.listen(3001, () => console.log('server started at port 3001'));
    
})
.catch(err => console.log('db connection failed. \n' + err))




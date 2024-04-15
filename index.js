const express=require('express');
const student=require('./routes/student');
const connect=require('./connection');
const app = express();
connect();
app.use(student);//use the file 

app.listen(3000,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('server is running ao 3000');
    }
})
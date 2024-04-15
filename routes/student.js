const express=require('express');
const studentcontroller=require('../controllers/student');
const router=express.Router();
const users=require('../MOCK_DATA.json');
router.use(express.json());
// const fs=require('fs');
//app.use(studentcontroller);
router.get('/',(req,res)=>{//run using postman,browser
    //res.json(users);
    studentcontroller.getData(req,res);
})
router.post('/student/create',(req,res)=>{//run using postman
    // let data =req.body;
    // users.push(data);
    // console.log(data);
    // fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>{
studentcontroller.createData(req,res);
    })
   // res.end('<h1>this is post req</h1>')
//})
router.put('/student/update/:id',(req,res)=>{//run using postman
    // let index=users.findIndex((user)=>user.id===parseInt(req.params.id));
    // console.log(index,'index');
    // users[index].first_name='aman';
    // fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>{
studentcontroller.updateData(req,res);
    })
   // res.end('<h1>this is put req</h1>')
//})
router.delete('/student/delete/:id',(req,res)=>{//run using postman
    // let index=users.findIndex((user)=>user.id===parseInt(res.parseInt))  
    // res.end('<h1>this is delete req</h1>')
    studentcontroller.deleteData(req,res);
})
router.get("/getById/:id", (req, res) => {
    //   let id = req.params.id;
    //   const user = users.find((user) => user.id === parseInt(id));
    //   res.json(user);
    studentContoller.getById(req, res);
  });
module.exports=router;
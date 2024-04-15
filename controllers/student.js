const users=require('../MOCK_DATA.json');
const fs=require('fs/promises');
const getData=(req,res)=>{
    res.json(users);
}
const createData=(req,res)=>{
    let data =req.body;
    users.push(data);
    console.log(data);
    fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>{

    })
    res.end('<h1>this is post req</h1>')
}
const updateData=(req,res)=>{
    let index=users.findIndex((user)=>user.id===parseInt(req.params.id));
    console.log(index,'index');
    users[index].first_name='aman';
    fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>{

    })
    res.end('<h1>this is update req</h1>')
}
const deleteData=(req,res)=>{
    let index=users.findIndex((user)=>user.id===parseInt(res.params.id))
    users.splice(index,1);
   fs.writeFile('MOCK_DATA.json',JSON.stringify(users).replace(err)={})
    res.end('<h1>this is delete req</h1>')
}
const getById = (req, res) => {
    let id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    res.json(user);
  };
module.exports={
getData,
createData,
updateData,
deleteData,
getById
}
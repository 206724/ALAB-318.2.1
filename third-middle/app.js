const express = require('express');
const parser =require(`body-parser`);
const app = express();

const port =3000;

//using body-parser middleware to parse JSON requests

app.use(parser.json());

app.post(`/api/data`,(req,res)=>{

    const reqData =req.body;
    console.log(`Received data:`,reqData);

    res.status(200).json({message : 'Data reveived successfully!'})
})

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
})
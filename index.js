const express =require("express")
const app = express()
const port =3000;

app.listen(port, ()=>{
    console.log(`Server listening on the port:${port}.`);
  });

//   const logReg =function(req,res,next)
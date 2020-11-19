const express=require("express")
const app=express();
const port =4400;
app.listen(port , err=>{
    if (err) console.log(err);
})
let date= Date();
let date2= new Date().getHours();

let test=()=>{
    let aff1=()=>app.use(express.static("public"));
    let aff2=()=>app.get('/',(req,res)=>{
        res.status(200).json("Services Unavailble In This Time of Day")
    });
    let aff3=(date)=>date.substr(0,1)==="S"?aff2():
            date2<9?aff2():
            date2>17?aff2():aff1();

    return aff3(date);
}


test();
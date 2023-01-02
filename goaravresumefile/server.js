

var express=require("express");
var path=require("path");
var app=express();

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder)

app.get('/',(req,res)=>

{
    res.sendFile("index.html");
}

)



app.listen(3000);
console.log("port is ruuning on port number no 3000");
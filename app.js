// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});
app.get("/index.html",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});
app.get("/contact.html",(req,res)=>{
  res.sendFile(__dirname+"/contact.html");
});
app.get("/services.html",(req,res)=>{
  res.sendFile(__dirname+"/services.html");
});
app.get("/process.html",(req,res)=>{
  res.sendFile(__dirname+"/process.html");
});
app.get("/work.html",(req,res)=>{
  res.sendFile(__dirname+"/work.html");
});
app.get("/aboutus.html",(req,res)=>{
  res.sendFile(__dirname+"/aboutus.html");
});
app.post("/contact",(req,res)=>{
  var fname=req.body.fname;
  var lname=req.body.lname;
  var email=req.body.email;
  var data={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME:fname,
          LNAME:lname
        },
      }
    ]
  };

  var jsonData=JSON.stringify(data);
  const url="https://us5.api.mailchimp.com/3.0/lists/71ec55f9c4";


  const options={
    method:"POST",
    auth:"quolt:65063285d8dfcacb8ab2039a37000e0c-us5"
  };
  const request=https.request(url,options,function(response){
    if(response.statusCode===200){
      res.sendFile(__dirname+"/success.html");
    }
    else{
      res.sendFile(__dirname+"/failure.html");
    }
    response.on("data",function(data){
      console.log(JSON.parse(data));
    });
    response.on("error",function(error){
      console.log(error);
    });

  });
  request.write(jsonData);
  request.end();
});
app.listen(8000,(req,res)=>{
  console.log("server is running at port 8000");
});
// list id
// 71ec55f9c4

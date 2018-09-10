//Loading the Express Dependency, Using the Router Function
const express = require('express')
const app = express()
const router = express.Router()
//Directory Point for Easy Access
const viewsPath = __dirname+'/views/';

//This is a middle layer to print the type of HTTP request to which a route is referring.
router.use(function(req,res,next) {
  console.log("/"+req.method);
  next();
});

//These have the routes with given udi addresses send the html file to the browser.
router.get("/",function(req,res) {
  res.sendFile(viewsPath+"index.html");
});

//This is how I load images.
router.get("image.jpg",function(req,res) {
  res.sendFile("./public/image.jpg")
});


//This tells express to use the routes defined above.
app.use("/",router);
//This tells express to use the public folder to serve static files (images).
app.use(express.static('./public'));
//This checks any request not matching a supplied route, this would be the 404 error page.
app.use("*",function(req,rest) {
  res.sendFile(viewsPath+"404.html");
});
//Run at localhost:3000
app.listen(3000,function() {
  console.log("Live at Port 3000...");
});

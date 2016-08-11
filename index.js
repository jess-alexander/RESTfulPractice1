///////////////////   INCLUDE LIBRARIES  ////////////////////////////////
var bodyParser =    require("body-parser"),
	express =       require("express"),
    methodOverride =      require("method-override"),        
    mongoose =      require("mongoose"),
    app =           express();

//////////////////////   APP CONFIG  ////////////////////////////////////
app.set("view engine", "ejs"); //express will expect the files to be EJS files.
app.use(bodyParser.urlencoded({extended: true})); //parse data from a form into the server
app.use(express.static("public")); //serve the contents in the public directory (mandatory for styling)
app.use(methodOverride("_method")); //tell the app to use methodOverride and what to look for in the URL (can be anything, but _method is typical)


///////////////////   MONGOOSE/MODEL CONFIG  ////////////////////////////

mongoose.connect("mongodb://localhost/shoe_catalogue"); 

var shoeSchema = new mongoose.Schema({ 
    type: String,
    color: String, // COULD ALSO DO -- {type: String, default: "placeholderimage.jpg"},
    size: Number,
    preferred: Boolean
});

var Shoes = mongoose.model("Shoes", shoeSchema); //compile the schema into a model.

///////////////////// CREATE BLOGS to fill database   //////////////////////////
// Shoes.create({
//     type: "sandal",
//     color: "#3355cc",
//     size: 9.5,
//     preferred: true
// }, function(err, newShoes){
//      if (err){
//         console.log("oh no! error!!");
//         console.log(err);
//     } else {
//         console.log("look what I found!");
//         console.log(newShoes);
//     }
// });
    
////////////////////////////////////////////////////////////////////////  
////////////////////////  ROUTE SECTION  ///////////////////////////////  
////////////////////////////////////////////////////////////////////////  

//////////////////////////  INDEX ROUTE  //////////////////////////////    
app.get("/", function(req,res){
	res.redirect("/shoes");
});

app.get("/shoes",function(req,res){
	Shoes.find({}, function(err, shoesReturned){
        if(err){
            console.log("ERROR -- from index route");
        } else {
            res.render("index",{shoesPassedIn:shoesReturned});
        }
    });
});

//////////////////////////  NEW / CREATE ROUTE  //////////////////////
app.get("/shoes/new", function(req,res){
	res.render("new-shoes");
});

app.post("/shoes/", function(req,res){
	Dog.create( );
});

//////////////////////////  SHOW ROUTE  //////////////////////////////    

//////////////////////////  EDIT / UPDATE ROUTE  /////////////////////   


//////////////////////////  APP LISTENER  //////////////////////////////    
app.listen(3000, function(){
	console.log("RESTfulPractice1 Server Started");
});
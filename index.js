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
app.use(expressSanitizer()); //sanitize input of scripts -- must be placed AFTER bodyparser. Use in Cretae/Update routss

///////////////////   MONGOOSE/MODEL CONFIG  ////////////////////////////

mongoose.connect("mongodb://localhost/shoe_catalogue"); 

var shoeSchema = new mongoose.Schema({ 
    type: String,
    color: String, // COULD ALSO DO -- {type: String, default: "placeholderimage.jpg"},
    size: Number,
    preferred: Boolean
});

var Blog = mongoose.model("Shoe", shoeSchema); //compile the schema into a model.
    

const express = require('express'); // Express web server framework
const app = express(); // Express web server application
const bodyParser = require('body-parser'); // Body parser middleware
const path = require('path'); // Path utilities
const port = process.env.PORT || 5000; // Port to run the server on
const multer = require('multer'); // Multer for handling file uploads
const db = require("./public/database/connect"); // Connect to the database
const Schema = require("./public/database/db"); // Schema for the database


app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json



const staticPath = path.join(__dirname, "./public"); // Path to static files
app.use(express.static(staticPath)); // Set static files location
app.use(express.json()); // Set JSON parser 



// Set up multer for handling file uploads
var storage = multer.diskStorage({ // Multer storage settings
    destination: function (req, file, cb) { // Destination function
        cb(null, './uploads');
    },
    filename: function (req, file, cb) { // Filename function
        cb(null, `${req.body.roll}_${req.body.firstname}_${req.body.lastname}${path.extname(file.originalname)}`);
    }
});




// Upload parameters for multer
const upload = multer({ // Define upload settings
    storage: storage,
    limits: {
        fileSize: 5000000 // Set maximum file size to 5MB
    }
});

// Define route after uploading file
app.post('/', upload.single('userfile'), async (req, res, next) => {
    const file = req.file; // Get the file from the request

    if (!file) {
        res.redirect('back');
    }
    else {
        try {
            res.redirect(req.originalUrl);
            const assignmentData = new Schema({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                roll: req.body.roll,
                branch: req.body.branch,
                email: req.body.email,
                pdf: file.originalname
            })
            const data = await assignmentData.save(); // Save the data to the database
        } catch {
            res.redirect('back');
        }

    }
});




app.listen(port, () => { // Start the server
    console.log(`Server is listening on http://localhost:${port}`); // Log the server is listening
}) // End server.listen()
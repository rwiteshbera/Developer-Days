const express = require('express'); // Express web server framework
const app = express(); // Express web server application
const path = require('path'); // Path utilities
const port = process.env.PORT || 3000; // Port to run the server on

require("./public/database/connect"); // Connect to the database
const db = require("./public/database/db"); // Get the database object

const staticPath = path.join(__dirname, "./public"); // Path to static files
app.use(express.static(staticPath)); // Set static files location
app.use(express.json()); // Set JSON parser
app.use(express.urlencoded()); // Set URL encoded parser

app.post('/', async (req, res) => {
    try {
       // Store the data in the database
        const data = new db({
            name: req.body.name,
            roll: req.body.roll,
            branch: req.body.branch,
            email: req.body.email,
            // file: req.body.userfile,
        })

        const submit = await data.save(); // Save the data to the database
        // pop up a success message
    res.send(`<h1>Success!</h1>`);
    
    }
    catch (e) {
        res.send(e);
        res.status(400).send(e);
    }
});

app.listen(port, () => { // Start the server
    console.log(`Server listening on port ${port}`); // Log the server is listening
}) // End server.listen()
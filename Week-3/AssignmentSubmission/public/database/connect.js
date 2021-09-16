// Connect express app to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentAssignment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful.");
}).catch((err) => {
    console.log(err);
});

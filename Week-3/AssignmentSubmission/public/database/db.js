const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pdf: {
        type: String,
        required: true
    }
});



// Now create a collection to store the data
const student = mongoose.model('assignment', studentSchema);
module.exports = student;
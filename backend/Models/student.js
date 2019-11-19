const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name :{
        type : String
        },
    country :{
            type : String
            },
    subject :{
            type : String
                },
    gender :{
            type : String
            }
});

const Student = mongoose.model('Student',studentsSchema);
module.exports =Student;

//module.exports = mongoose.model('Student',studentsSchema);
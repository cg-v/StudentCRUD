const express = require('express');
const app = express();

const cors = require('cors');
 const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const Student = require('./Models/student');

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


 mongoose.connect('mongodb://localhost:27017/StudentDB').then(() => {
    console.log('Connected to MOngoDB');
}).catch((e)=>{ 
    console.log('Error in coonection');
    console.log(e);
}); 



 app.get('/api/students',(req,res) =>{
    Student.find((err,students) =>{
        if(err)
            console.log(err);
        else
            res.json(students);
    });
}); 


 app.get('/api/students/:id',(req,res) =>{
    Student.findById(req.params.id ,(err,student) =>{
        if(err)
            console.log(err);
        else
            res.json(student);

    })
});

app.post('/api/students/add',(req,res) =>{
    let student = new Student(req.body);
    student.save()
    .then( studentAdded =>{
        res.status(200).json({'message' : 'Added successfully'});
    })
    .catch(err =>{
        res.status(400).json({'message' : 'Failed to create a new record'});
    });
});

app.put('/api/students/update/:id',(req,res) =>{
    Student.findById(req.params.id ,(err,studentToBeEdited) =>{
        if(!studentToBeEdited)
            return next(new Error('Could not load the record'));
        else
        {
            studentToBeEdited.name= req.body.name;
            studentToBeEdited.country= req.body.country;
            studentToBeEdited.subject= req.body.subject;
            studentToBeEdited.gender= req.body.gender;
            studentToBeEdited.save().then( updatedStudent =>{
                res.json('Updated successfully');
            }).catch((err) =>{
                res.status(400).json({'message' : 'Update failed'});
            })


        }
    })
});

app.delete('/api/students/delete/:id',(req,res) =>{
    Student.findByIdAndRemove({_id : req.params.id},(err, student) => {
        if(err)
        res.json(err);
    else
        res.json('Removed successfully');
    });
}); 

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
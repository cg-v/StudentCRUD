import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Student } from '../../student.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
id : String;
student : any ={};
updateForm : FormGroup;

  constructor(private studentService : StudentService,private router : Router, private route : ActivatedRoute,
               private snackBar : MatSnackBar, private fb: FormBuilder) {
                 this.createForm(); 
               }

  createForm(){
    this.updateForm= this.fb.group({
      name : ['', Validators.required],
      country :'',
      subject : '',
      gender : ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe((parameter) =>{
        this.id = parameter.id;
        this.studentService.getStudentById(this.id).subscribe((res) =>{
          this.student = res;
          this.updateForm.get('name').setValue(this.student.name);
          this.updateForm.get('country').setValue(this.student.country);
          this.updateForm.get('subject').setValue(this.student.subject);
          this.updateForm.get('gender').setValue(this.student.gender);
        })
    });
  }

  updateStudentmainMethod(name,country,subject,gender){
    this.studentService.updateStudent(this.id,name,country,subject,gender).subscribe(() =>{
      this.snackBar.open('Student details updated successfully','OK',{
        duration : 3000
      });
    });
  }

}

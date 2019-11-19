import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
createForm : FormGroup;
  constructor(private studentService : StudentService, private fb : FormBuilder, private router : Router) { 
    this.createForm= this.fb.group({
      name : ['', Validators.required],
      country :'',
      subject : '',
      gender : ''
    });
  }

  ngOnInit() {
  }

  addStudentMainMethod(name,country,subject,gender){
    this.studentService.addStudent(name,country,subject,gender).subscribe(() =>{
      this.router.navigate(['/list']);
    });

  }

}

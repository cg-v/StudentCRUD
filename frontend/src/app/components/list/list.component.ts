import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../student.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
students : Student[];
displayedColumns :String[] =  ['name','country','subject','gender','actions'];

  constructor(private studentService : StudentService, private router : Router) { }

  ngOnInit() {
   this.fetchStudents();
  }

  fetchStudents(){
    this.studentService.getAllStudents().subscribe((data : Student[]) =>{
      this.students = data;
      console.log('Data requested...');
      console.log(this.students);
    });
  }

  editStudent(id){
    this.router.navigate([`/edit/${id}`]);
  }


deleteStudent(id){
   this.studentService.deleteStudent(id).subscribe(() =>{
     this.fetchStudents();
   })
  }

}

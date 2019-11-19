import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
uri ='http://localhost:4000';

  constructor(private http : HttpClient) { }

  getAllStudents(){
    return this.http.get(`${this.uri}/api/students`);
  }

  getStudentById(id){
    return this.http.get(`${this.uri}/api/students/${id}`)
  }

  addStudent(name,country,subject,gender){
    const newStudent ={
      name : name,
      country : country,
      subject : subject,
      gender : gender
    };
  return this.http.post(`${this.uri}/api/students/add`, newStudent);

  }

 updateStudent(id,name,country,subject,gender){
    const updatedStudent ={
      name : name,
      country : country,
      subject : subject,
      gender : gender
    };
   return this.http.put(`${this.uri}/api/students/update/${id}`, updatedStudent);
   }

   deleteStudent(id){
     return this.http.delete(`${this.uri}/api/students/delete/${id}`)

   }
}

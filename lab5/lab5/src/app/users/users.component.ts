import { Component,OnInit } from '@angular/core';
import { DemoService } from 'src/app/servicess/demo.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(public myService:DemoService){

  }
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe(
      {
        next:(data)=>{
          //console.log(data)
          this.users = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  deleteStudent(id: number) {
    if (window.confirm('Are you sure you want to delete this student?')) {
      this.myService.DeleteStudentById(id).subscribe(() => {
        this.users = this.users.filter((u: any) => u.id !== id);
      });
    }

}}

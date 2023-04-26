import { DemoService } from 'src/app/servicess/demo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
 
  constructor(private myService:DemoService){  }

  Add(name:any,age:any, email:any, phone:any){
    let newUser = {name, age, email,phone};
    this.myService.AddNewUser(newUser).subscribe();
    alert("Data submitted successfully!!");
    // window.location.href="../students/students.component.html";

  }
}

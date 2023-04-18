import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students: { name: string, age: number, phone:number, address:string, email:string }[] = [{
    name: 'wafaa',
    age: 22,
    phone:1111,
    address:'sporting',
    email:'wafaa@gmail.com'
  },
    {
      name: 'ahmed',
      age: 30,
      phone:33333,
      address:'agamy',
      email:'ahmed@gmail.com'
  },
  {
    name: 'kareem',
    age: 25,
     phone:34444,
     address:'smuha',
     email:'kareem@gmail.com'
    }
    ,
    {
      name: 'menna',
      age: 22, 
      phone:6433,
      address:'ibrahimia',
      email:'menna@gmail.com'
  }
,
  {
    name: 'jihan',
    age: 22, 
    phone:5322,
    address:'sporting',
    email:'jihan@gmail.com'
}
];



}

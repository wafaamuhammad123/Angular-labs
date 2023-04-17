import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="lab3";
  //im gonna put here the data from parent
  fname="";
  age="";
  Students:{name:string, age:string}[] = [];
  
  getData(data:any){
    this.Students.push(data);
  }
  parentData:any = this.Students;
}

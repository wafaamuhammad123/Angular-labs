import { Component,OnInit } from '@angular/core';
import { DemoService } from 'src/app/servicess/demo.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit {
  ID:any;
  user:any;
  constructor(myRoute:ActivatedRoute,public myService: DemoService, private router:Router){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          //console.log(data);
          this.user = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  UpdateUser(name: any, age: any, email: any, phone: any) {
    let updatedStudent = { name, age, email, phone };
    this.myService.UpdateUser(this.ID, updatedStudent).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

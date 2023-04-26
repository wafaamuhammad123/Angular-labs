import { Component,OnInit } from '@angular/core';
import { DemoService } from 'src/app/servicess/demo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  ID:any;
  user:any;
  constructor(myRoute:ActivatedRoute,public myService: DemoService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          this.user = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private readonly myClient:HttpClient) { }
  private readonly Base_URL = 'http://localhost:3000/users';
  GetAllUsers(){
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewUser(newUser:any){
    return this.myClient.post(this.Base_URL, newUser);
  }
  DeleteStudentById(id: any){
    return this.myClient.delete(this.Base_URL+"/"+id);
  }
  UpdateUser(id: any, updatedStudent: any) {
    return this.myClient.put(this.Base_URL + "/" + id, updatedStudent);
  }

}

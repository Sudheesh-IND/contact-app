import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //setting up dependecy injection
  constructor(private http:HttpClient) { }

  //get function for getting all contact details
  allContact():Observable<MyContact>{
    //giving the path name as a get method
     return this.http.get('http://localhost:3000/contacts')
  }
  //view a particular contact
  viewParticularContact(contactId:string){
    return this.http.get(`http://localhost:3000/contacts/${contactId}`)
  }
  //getting the group name
  getGroupName(GroupId:string){
    return this.http.get(`http://localhost:3000/groups/${GroupId}`)
  }
  //Api call for add contact
  addContact(contactBody:any){
    return this.http.post('http://localhost:3000/contacts',contactBody)
  }
  //get all groups for selecting in add contact
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }
  //api call for deleting a specific contact
  deleteContact(contactId:any){
    return this.http.delete(`http://localhost:3000/contacts/${contactId}`)
  }

  //update a particular contact
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`http://localhost:3000/contacts/${contactId}`,contactBody)
  }
  
}

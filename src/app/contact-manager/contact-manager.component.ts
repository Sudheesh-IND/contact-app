import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
   
  searchKey:string=''
  //setting up a variable to old the contact data
  contactDetails:any=[]
  loginDate:any; //for holding the date
  
  //api dependecy injection 
      constructor(private api:ApiService ){
        this.loginDate=new Date()
      }
  ngOnInit(): void {
   
    
    this.allContact()
     
    
  }
  allContact(){
     //this is a refernce variable used to refer class and object
    this.api.allContact().subscribe((data:MyContact)=>{
      console.log(data)
      this.contactDetails=data
      console.log(this.contactDetails)
    })
   }

  searchItem(event:any){
    console.log(event.target.value)
    this.searchKey=event.target.value
  }

  deleteContact(contactId:any){
      this.api.deleteContact(contactId).subscribe((result:any)=>{
        alert('Contact Deleted')
        this.allContact()
      })
  }
}

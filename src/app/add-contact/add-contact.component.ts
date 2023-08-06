import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact:MyContact={}
  groupNames:any=[] //for holding groups


  constructor(private api:ApiService,private route:Router){
    this.contact.groupId='Select a group'
  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data)
      this.groupNames=data
    })
  }

  addContact(){
    this.api.addContact(this.contact).subscribe((result:any)=>{
      this.route.navigateByUrl('')
      this.api.allContact()
    })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactId:string=''
  contact:MyContact={}
  groups:MyGroup[]=[]

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.contactId)
      this.contactId=data.contactId

      //calling the view contact details
      this.api.viewParticularContact(this.contactId).subscribe((data)=>{
        console.log(data)
        this.contact=data

        //getting group details
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data)
          this.groups=data
        })
      })
    })
  }
  updateContact(){
    this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
      console.log(data)
      this.route.navigateByUrl('')
    })
  }

}

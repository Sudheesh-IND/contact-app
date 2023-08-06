import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  //take a variable to hold the id
  contactId:string=''
  viewSpecific:any=[]
  GroupId:string=''
  groupName:string=''
          
      constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {

    //to take the id passed through url
      this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data) //object
      console.log(data.id) //to get id inside object
      this.contactId=data.id
      
      //to take the details from the server of specific id
      
      this.api.viewParticularContact(this.contactId).subscribe((data:any)=>{
      console.log(data)
      this.viewSpecific=data
      this.GroupId=data.groupId
      console.log(this.GroupId)

      // calling the getGroupName
        this.api.getGroupName(this.GroupId).subscribe((data:any)=>{
        console.log(data)
        this.groupName=data.name
        console.log(this.groupName)
      })

      })
    })
  }
}

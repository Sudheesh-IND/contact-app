import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(viewContact:any[],searchTerm:string,propName:string):any[] {
     const result:any[]=[]
    if(!viewContact||searchTerm==''||propName==''){
      return viewContact
    }
    viewContact.forEach((contact:any)=>{
      //if(contact[propName]==searchTerm) this is the logic

      if(contact[propName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
              result.push(contact)
      }
    })
    return result;
  }

}

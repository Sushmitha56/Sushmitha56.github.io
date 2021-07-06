import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  toggle:boolean= false;
  rowData=[];

  constructor() { }

  toggler(){
    this.toggle=!this.toggle
    console.log("service calledasdfgh",this.rowData)
  }

}

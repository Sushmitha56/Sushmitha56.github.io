import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  sideBarOpen:boolean=false

  constructor(private service:ProviderService) { 
    this.sideBarOpen = this.service.toggle;

  }
  

  ngOnInit(): void {
    console.log("sidebar open",this.sideBarOpen)
  }
  rightSideBar(){
    this.sideBarOpen=!this.sideBarOpen
  }

  

}

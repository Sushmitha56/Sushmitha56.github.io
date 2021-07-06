import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  notifications:boolean=false;
  secure:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  notification(){
    this.notifications=true
    this.secure=false
  }
  security(){
    this.secure=true
    this.notifications=false
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}

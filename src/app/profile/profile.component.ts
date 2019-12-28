import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email = new FormControl();

  pword = new FormControl();

  address = new FormControl();

  address2 = new FormControl();

  state = new FormControl();

  city = new FormControl();

  checkme = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  saveDetails(){
    alert(this.email.value);
  }

}

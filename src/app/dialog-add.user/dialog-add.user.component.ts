import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { sharedImports } from '../../shared-imports';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { User } from '../../models/user.class';



@Component({
  selector: 'app-dialog-add.user',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, sharedImports, MatDatepickerModule],
  templateUrl: './dialog-add.user.component.html',
  styleUrl: './dialog-add.user.component.scss'
})
export class DialogAddUserComponent {
  user: User = new User();
  constructor ( ){}

  saveUser(){
    console.log(this.user)
  }
 
}

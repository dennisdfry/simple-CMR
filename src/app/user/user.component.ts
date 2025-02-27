
import { CommonModule } from '@angular/common';
import { DialogAddUserComponent } from '../dialog-add.user/dialog-add.user.component';
import { sharedImports } from '../../shared-imports';
import {ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';

import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle,
  } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  
  constructor(public dialog:MatDialog){}

  ngOnInit(): void {
      
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
    });

  }
}

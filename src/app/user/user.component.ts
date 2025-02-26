
import { CommonModule } from '@angular/common';
import { DialogAddUserComponent } from '../dialog-add.user/dialog-add.user.component';
import { sharedImports } from '../../shared-imports';
import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';

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
export class UserComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}

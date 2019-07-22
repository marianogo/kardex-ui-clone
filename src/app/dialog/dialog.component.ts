import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KardexCardDTO } from '../model/kardexCardDTO.model';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog.html',
})
export class DialogCardexDetailMovement{

    constructor(
        public dialogRef: MatDialogRef<DialogCardexDetailMovement>,
        @Inject(MAT_DIALOG_DATA) public data: KardexCardDTO) {}
 
    onNoClick(): void {
        this.dialogRef.close();
      }
}
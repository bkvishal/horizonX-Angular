import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmsService } from 'src/app/core/services/ems.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {

  formAdd!: FormGroup;

  constructor(private fb: FormBuilder,
    private empService: EmsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddUserDialogComponent>) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): any {
    this.formAdd = this.fb.group({
      sapId: [''],
      empName: ['', Validators.required],
      designation: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required]
    });

  }

  addedOrUpdateUser(): any {

    if (this.data.sapId) {
      // because id is important when update an existing record thats why we are passing sapId
      this.formAdd.controls.sapId.setValue(this.data.sapId);
      this.empService.updateEmployee(this.formAdd.value).subscribe(
        (data: any) => {
          console.log('updated data' + data);
          this.dialogRef.close();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    } else {
      this.empService.addEmployee(this.formAdd.value).subscribe(
        (data: any) => {
          console.log(data);
          this.dialogRef.close();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


  }


  closeDialog(): any {
    this.dialogRef.close();
  }


}

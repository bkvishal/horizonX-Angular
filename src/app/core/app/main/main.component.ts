import { Component, OnInit } from '@angular/core';
import {EmsService} from "../../services/ems.service";
import {Employee} from "../../services/Employe";
import { MatDialog } from '@angular/material/dialog';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization
  public employe!: Employee;

  public filterString: string = "";
  public employees: Employee[] = [];

  constructor(private emsService: EmsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.emsService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
        console.log(data);
      },
      // getting any error which occur in this event
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addOrUpdateEmployee(emp: any) {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      data: emp || {},
      height: '550px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  deleteEmp(sapId: number) {
    console.log("Deleting emp" + sapId);
    this.emsService.deleteEmployee(sapId).subscribe(
      (data: any) => {
        console.log(data);
        console.log("Deleted");
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FirestoreService } from '../../../firestore.service';
import { RegisterComponent } from './../register/register.component';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.loginGroup = this.fb.group({
      email: [],
      password: []
    });
  }

  register() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px';
    dialogConfig.width = '800px';
    const dialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  }

  login() {
    this.firestoreService.signin(this.loginGroup.value.email, this.loginGroup.value.password)
      .subscribe(res => {
        this.router.navigate(['/ngschool', 'rxjscourse']);
      })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from './../../../firestore.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      email: [],
      password: [],
      pwconfirm: []
    })
  }

  onRegister(): void {
    if (this.formGroup.value.password === this.formGroup.value.pwconfirm) {
      this.firestoreService.signup(
        this.formGroup.value.email,
        this.formGroup.value.password
      ).subscribe(data => {
        this.dialogRef.close();
        this.router.navigate(['/ngschool', 'rxjscourse']);
      })
    }

  }

  onClose() {
    this.dialogRef.close()
  }

}

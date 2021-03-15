import { Component, OnInit } from '@angular/core';
import { LocalStorageComponent } from './../core/local-storage/local-storage.component';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ngschool',
  templateUrl: './ngschool.component.html',
  styleUrls: ['./ngschool.component.scss']
})
export class NgschoolComponent implements OnInit {

  isLoggedIn = false;
  constructor(
    private router: Router,
    public firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.firestoreService.logout()
      .subscribe(res => {
        console.log(res);
        this.isLoggedIn = false;
        this.router.navigate(['/ngschool', 'login']);
      });
  }

}

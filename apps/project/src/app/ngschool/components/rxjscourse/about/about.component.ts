import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private firebaseService: FirestoreService,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  runTransaction() { }

  onReadDoc() { }
  onReadCollection() {

  }

  onReadCollectionGroup() {

    console.log('onReadCollectionGroup');
    this.db.collectionGroup("lessons",
      ref => ref.where("seqNo", "==", 1))
      .get()
      .subscribe(snaps => {
        console.log(snaps);
        snaps.forEach(snap => {
          console.log(snap.id);
          console.log(snap.data());
        })
      })
  }

}

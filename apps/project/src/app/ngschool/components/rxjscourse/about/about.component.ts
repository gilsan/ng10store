import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { formatCurrency } from '@angular/common';

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

  onReadDoc() {
    /*
    this.db.doc('/courses/BHCnlxGOZ8Ssg2ydeQkQ').get()
      .subscribe(snaps => {
        console.log(snaps.data());
        console.log(snaps.id);
      });

    this.db.doc('/courses/BHCnlxGOZ8Ssg2ydeQkQ').collection('lessons').get()
      .subscribe(snaps => {
        snaps.forEach(snap => {
          console.log(snap.data());
          console.log(snap.id);
        })
      });

    this.db.doc('/courses/BHCnlxGOZ8Ssg2ydeQkQ').snapshotChanges()
      .subscribe(snap => {
        console.log('=== snapshotChange ====');
        console.log(snap);
        console.log('type:', snap.type);
        console.log('id', snap.payload.id)
        console.log('data() ', snap.payload.data());
        console.log('=== snapshotChange ====');
      });
    */
    this.db.collection('courses', ref => ref.orderBy("seqNo")).get()
      .subscribe(snapshot => {
        console.log(snapshot.);
        console.log('empty: ', snapshot.empty);
      })

    // this.db.collection('/courses').snapshotChanges()
    //   .subscribe(snaps => {
    //     snaps.forEach(snap => {
    //       console.log(snap.payload.doc.data());
    //       console.log(snap.payload.doc.id);
    //     })
    //   })


  }

  onAddDoc() {
    from(this.db.collection(`user`).add({ email: 'test@test.com' }))
      .subscribe(data => {
        console.log('=== ADD Data ====')
        console.log(data);
        console.log(data.id);
      });

    from(this.db.doc('/user/hong').set({ eamil: 'setuser@test.com' }))
      .subscribe(data => {
        console.log('==== SET Data ====')
        console.log(data);
      })

  }

  onReadCollection() {

  }

  onAddCollection() { }

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

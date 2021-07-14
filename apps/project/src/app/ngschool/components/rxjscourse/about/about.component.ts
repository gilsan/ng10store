import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../firestore.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { formatCurrency } from '@angular/common';
import { map, tap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  friendsRef: AngularFirestoreCollection = this.db.collection('friends');
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
        console.log(snapshot);
        // snapshot.forEach(doc => {
        //   console.log(doc.data());
        // });
        const lists = snapshot.docs[0].data();
        console.log('[===== ]', lists);
        console.log(snapshot.docs[0].id);
        console.log('empty: ', snapshot.empty);
      })

    // const collRef = this.db.collection('courses').ref;
    // const queryRef = collRef.where('seqNo', '==', 1);

    // queryRef.get().then((snapShot) => {
    //   console.log(snapShot.docs[0].data().category);
    //   if (!snapShot.empty) {

    //   }
    // })

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


  onAddCollection() {
    from(this.friendsRef.add({ email: 'test@test.com' }))
      .pipe(
        tap(result => console.log(result)),
        map((docRef) => {
          return from(this.friendsRef.doc(docRef.id).collection('myfriend').add({ email: 'request email' }));
        })
      ).subscribe(data => {
        console.log('data ', data);
      });
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

  onTest() {

    const msg = [{ sender: "han@test.com", receiver: "jung@test.com" }];

    from([msg])
      .pipe(
        map(requests => requests.filter((request: any) => request.uid !== undefined)),
      )
      .subscribe(data => {
        console.log(data);
      })
  }

}

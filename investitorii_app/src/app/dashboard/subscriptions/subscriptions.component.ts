import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private auth: AuthService, private firestore: AngularFirestore) { }
  @Input() transactions: any;
  panelOpenState = false;
  subscriptions$ :Observable<any>;


  ngOnInit(): void {
    this.getSubscriptions();
  }

  private getSubscriptions() {
    let userId;
    this.auth.firebaseAuth.user.subscribe(user=> {
      userId = user.uid;
      this.subscriptions$ = this.firestore.collection('users').doc(userId).collection('subscriptions').valueChanges({ idField: "id" });
    });
  }

  public removeSubscription(id: string) {
    let userId;
    this.auth.firebaseAuth.user.subscribe(user=> {
      userId = user.uid;
      this.firestore.collection('users').doc(userId).collection('subscriptions').doc(id).delete();
    });
  }

}

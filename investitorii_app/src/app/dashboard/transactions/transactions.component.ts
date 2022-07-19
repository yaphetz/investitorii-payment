import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private auth: AuthService) { }
  transactions: any = []
  transactions$: Observable<any>;

  ngOnInit(): void {
    this.getTransactions();
    this.transactions = [{
      product: 'Investitorii VIP',
      price: '199 lei',
      date: new Date()
    },
    {
      product: 'Crypto',
      price: '299 lei',
      date: new Date()
    },
    {
      product: 'Bursă',
      price: '499 lei',
      date: new Date()
    }]
  }

  private getTransactions() {
    let userId;
    this.auth.firebaseAuth.user.subscribe(user=> {
      userId = user.uid;
      this.transactions$ = this.firestore.collection('users').doc(userId).collection('transactions').valueChanges();
    });
  }

}

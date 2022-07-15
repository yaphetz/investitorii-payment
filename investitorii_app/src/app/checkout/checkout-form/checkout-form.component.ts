import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { PaylikeService } from 'src/app/services/paylike.service';
import { Order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import escapeStringRegexp from 'escape-string-regexp';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  constructor(private payService: PaylikeService, private auth: AuthService, private formBuilder: FormBuilder, private router: Router, private firestore : AngularFirestore) {}

  ngOnInit(): void {
    this.createForm();
    this.getCurrentUserId();
  }

  ngAfterViewInit() {}

  order : Order = {amount: 1999, currency: 'EUR', products: ['Investitorii VIP'], subscription: true};
  orderComplete: boolean= false;
  checkoutForm: FormGroup;
  currentUserId: string;

  createForm() {
    this.checkoutForm = this.formBuilder.group({
      secondName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required]],
      adress: ['', Validators.required],
    })

    this.auth.changePassword();
  }

  submitForm() {
    if(this.checkoutForm.valid){
      this.openPaylike(this.order);
    }
  }

  openPaylike(order: any) {
    this.payService.paylike.pay(
      {
        test: true,
        amount: { currency: order.currency, exponent: 2, value: order.amount },
      },
      (err: any, result: any) => {
        order.transactionID = result.transaction.id;
        if (err) return console.log(err);
        this.payService.verifyPayment(order).pipe(take(1)).subscribe( result => {
          if(result)
          {
            if(!this.currentUserId) {
              let randomPassword = Math.random().toString(36).slice(-8);
              this.auth.signup(this.checkoutForm.controls['email'].value, randomPassword)
            }
            this.order.userDetails = this.checkoutForm.getRawValue();
            order.dateTime = new Date();
            this.saveTransaction(order);
            this.router.navigate(['register'], { state: this.order})
          }
        })
        
      }
    );
  }

  private saveTransaction(transaction: any) {
    let userId;
    this.auth.firebaseAuth.user.subscribe(user=> {
      userId = user.uid;
      this.firestore.collection('users').doc(userId).collection('transactions').add(transaction);
      if(transaction.subscription) {
        this.firestore.collection('users').doc(userId).collection('subscriptions').add(transaction);
      }
    });
  }

  private getCurrentUserId() {
    this.auth.firebaseAuth.user.subscribe(user=> {
      this.currentUserId = user.uid;
    });
  }
}

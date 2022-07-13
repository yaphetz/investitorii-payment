import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { PaylikeService } from 'src/app/services/paylike.service';
import { Order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  constructor(private payService: PaylikeService, private auth: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  order : Order = {amount: 1999, currency: 'EUR'};
  orderComplete: boolean= false;

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
            this.orderComplete = true;
          }
        })
      }
    );
  }
}

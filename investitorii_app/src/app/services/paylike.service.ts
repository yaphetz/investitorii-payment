import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Order } from '../models/order.model';

declare var Paylike: any;

@Injectable({
  providedIn: 'root',
})
export class PaylikeService {
  paylike: any;
  verifyPaymentEndpoint: string = 'https://us-central1-investitoriiromania.cloudfunctions.net/paylike/ValidatePayment';

  constructor(private http: HttpClient) {
    this.paylike = Paylike({ key: 'c3eaf3ae-bc8f-4c7d-9827-499bb10ca201' });
  }

  verifyPayment(order: Order) {
    return this.http.get(
      this.verifyPaymentEndpoint +
        `?transactionID=${order.transactionID}&amount=${order.amount}&currency=${order.currency}`
    );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  products: any = []

  ngOnInit(): void {
    this.products= [{
      name: 'Investitorii VIP',
      price: '199$',
    },
    {
        name: 'Curs Crypto',
        price: '99$',
    },
    {
      name: 'Curs Bursa',
      price: '299$',
  }]
  }



}

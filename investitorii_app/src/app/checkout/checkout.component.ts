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
      price: '19.99$',
    },]
  }



}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {

  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  counts(){
    this.count++;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private formBuilder : FormBuilder) {
    let routerData = this.router.getCurrentNavigation().extras.state;
    if (routerData) {
      this.order = routerData;
      let email = this.order.userDetails.email;
      this.email = email;
      this.paymentDone = true;
      console.log(this.order);
    } 
    this.createForm();
    this.startCountdown();
  }
  @Input() email : string = '';
  registerForm: FormGroup;
  hidePassword = true;
  hidePasswordConfirmation = true;
  paymentDone: boolean = false;
  order: any;
  countdown: number;


  createForm() {
    this.registerForm = this.formBuilder.group({
      email: [{value: this.email, disabled: true}],
    })
  }

  signup(email: string, password: string) {
    this.authService.signup(email, password);
  }

  startCountdown() {
    this.countdown= 5;
    for (let index = 0; index < 5; index++) {
      setTimeout(() => {
        this.countdown--;
      }, index*1000);
      
    }
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 5000);
  }

  ngOnInit(): void {}

}

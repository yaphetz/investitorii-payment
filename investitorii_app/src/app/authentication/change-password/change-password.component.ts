import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  constructor(private authService: AuthService, private router: Router) {}
  signinFetching: boolean = false;
  error: string = null;
  hidePassword = true;
  hidePasswordConfirmation = true;

  async changePassword(password: string) {
    this.signinFetching = true;
    this.error = null;
    try {
      await this.authService.changePassword(password)
      .then((res) => {
        console.log(res)
      })
      .catch(error=> {
        console.log(error)
        this.signinFetching = false;
        this.error = 'S-a produs o eroare';
      });
    } catch (error) {
      console.log(error)
    }

  }
}

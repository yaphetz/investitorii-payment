import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  forgotForm: FormGroup;

  error: string;
  succes: boolean;
  email: string;
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  public async sendChangePasswordEmail(email: string) {
    this.authService.firebaseAuth
      .sendPasswordResetEmail(email)
      .then((res) => {
        this.error = null;
        this.succes = true;
      })
      .catch((error) => {
        this.error = 'Emailul nu corespunde cu niciun cont activ.';
      });
  }
}

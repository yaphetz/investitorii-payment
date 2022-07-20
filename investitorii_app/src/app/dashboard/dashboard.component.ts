import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private firestore: AngularFirestore) { }

  userDefaultPassword : boolean;
  resetPasswordSent : any;

  public sendChangePasswordEmail() {
    this.auth.user$.pipe(take(1)).subscribe(user=> {
      this.auth.sendChangePasswordEmail(user.email);
      this.firestore.collection('users').doc(user.uid).update({defaultPassword: false}).then( ()=> {
        this.userDefaultPassword = false;
        this.resetPasswordSent = { sent: true, email: user.email};
      })
    }) 
  }

  ngOnInit(): void {
    this.auth.user$.pipe(take(1)).subscribe( user => {
      this.userDefaultPassword = user.defaultPassword;
    })
  }

}

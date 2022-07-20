import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatChipsModule } from "@angular/material/chips";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SideContentComponent } from './side-content/side-content.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ClientComponent } from './client/client.component';
import { PaymentDoneComponent } from './authentication/register/payment-done/payment-done.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionsComponent } from './dashboard/subscriptions/subscriptions.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { ChangePasswordComponent } from './authentication/change-password/change-password.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    HeaderComponent,
    FooterComponent,
    SideContentComponent,
    LoginComponent,
    RegisterComponent,
    ClientComponent,
    PaymentDoneComponent,
    TransactionsComponent,
    DashboardComponent,
    SubscriptionsComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDlvNNWyVLRErOkJXjkWh5IO32CNhoxIX0',
      authDomain: 'investitoriiromania.firebaseapp.com',
      projectId: 'investitoriiromania',
      storageBucket: 'investitoriiromania.appspot.com',
      messagingSenderId: '781921499389',
      appId: '1:781921499389:web:2d70b4396e382d77df6694',
      measurementId: 'G-HCH1YJ9Y40',
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSortModule,
    MatSnackBarModule,
    CdkAccordionModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

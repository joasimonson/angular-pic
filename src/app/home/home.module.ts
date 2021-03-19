import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  providers: [SignUpService]
})
export class HomeModule {}

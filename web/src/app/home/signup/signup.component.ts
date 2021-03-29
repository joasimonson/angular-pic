import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { userNamePasswordValidator } from './username-password.validator';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator,
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    },
    {
      validator: userNamePasswordValidator
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signUp() {
    if (this.signUpForm.invalid || this.signUpForm.pending) return;

    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService
      .signUp(newUser)
      .subscribe(() => this.router.navigate(['']));
  }
}

import { NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PreventSpaceDirective } from 'src/app/shared/directives/prevent-space/prevent-space.directive';
import { FormControlErrorsComponent } from '../../../shared/components/form-control-errors/form-control-errors.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormControlErrorsComponent,
    TranslateModule,
    NgClass,
    PreventSpaceDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  constructor(private readonly fb: NonNullableFormBuilder) {}
  subscriptions: Subscription[] = [];
  isPasswordHidden = true;

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(320),
        Validators.email,
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
  });

  showHidePassword() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  onSubmit(): void {
    // let loginSubscriber$ = this.authService
    //   .login(this.loginForm.value)
    //   .subscribe({});
    // this.subscriptions.push(loginSubscriber$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.splice(0);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

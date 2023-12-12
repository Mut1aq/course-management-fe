import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FormControlErrorsComponent } from '../../shared/components/form-control-errors/form-control-errors.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormControlErrorsComponent, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(
    private readonly fb: NonNullableFormBuilder,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
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

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'body-background');
  }

  onSubmit(): void {
    // let loginSubscriber$ = this.authService
    //   .login(this.loginForm.value)
    //   .subscribe({});
    // this.subscriptions.push(loginSubscriber$);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'body-background');
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

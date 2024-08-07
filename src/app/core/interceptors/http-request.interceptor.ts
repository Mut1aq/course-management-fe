import { isPlatformBrowser } from '@angular/common';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  requestCount: number = 0;
  constructor(
    private readonly api: ApiService,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformID: Object
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request;
    let headersConfig;

    if (this.requestCount === 0) {
      this.api.loading$.next(true);
    }
    this.requestCount++;
    if (isPlatformBrowser(this.platformID))
      headersConfig = {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Accept-Language': localStorage.getItem('language') ?? 'en',
      };
    request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      retry(1),
      catchError((err: any) => {
        return this.handleError(err);
      }),
      finalize(() => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.api.loading$.next(false);
        }
      })
    );
  }

  handleError(error: any) {
    const { statusText, status, name } = error;

    if (
      (error instanceof HttpErrorResponse &&
        error.status === HttpStatusCode.Unauthorized) ||
      error.status === HttpStatusCode.Forbidden
    ) {
      if (isPlatformBrowser(this.platformID))
        localStorage.removeItem('accessToken');
      this.router.navigate(['auth/login']);
    } else if (error instanceof ProgressEvent) {
    } else if (
      name === 'HttpErrorResponse' &&
      statusText === 'Unknown Error' &&
      status === 0
    ) {
      error.error.message = 'internet.down';
    }

    return throwError(() => error);
  }
}
export const HttpRequestInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestInterceptor,
  multi: true,
};

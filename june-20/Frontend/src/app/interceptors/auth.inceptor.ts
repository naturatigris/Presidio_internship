// auth.interceptor.ts
import { HttpInterceptorFn,  HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
    const authService = inject(AuthService);

  console.log('to check',token);
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.url.includes('/auth/refresh')) {
        return authService.refreshtoken().pipe(
          switchMap((newToken) => {
            const cloned = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`,
              },
            });
            return next(cloned);
          })
        );
      }

      return throwError(() => error);
    })
  );
};

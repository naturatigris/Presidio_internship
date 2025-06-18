import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthGuard } from './auth-gaurd';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './Service/product.service';
import { UserService } from './Service/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ProductService,
    UserService,
    AuthGuard
  ]
};

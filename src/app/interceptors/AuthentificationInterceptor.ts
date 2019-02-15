import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthentificationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('request',req);
     if ( ! token) {
       return next.handle(req);
     } else {
       console.log('i add a token in headers');
       const newReq = req.clone({
         headers: new HttpHeaders().append('Authorization', `Bearer ${token}`)
       }
       );
       return next.handle(newReq);
     }
  }
}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthentificationInterceptor,
  multi: true
};

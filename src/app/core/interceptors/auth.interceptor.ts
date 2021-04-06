import { AuthService } from 'src/app/core/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (!this.isMultipartFormData(request.method, request.url)) {
    //   request = this.addContentType(request);
    // }

    if (!this.isPublicRequest(request.method, request.url)) {
      request = this.addToken(request, this.authService.getToken());
    }
    return next.handle(request);
  }

  private addContentType(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private isPublicRequest(method: string, url: string): boolean {
    return (method === 'GET' || url.includes('login') || url.includes('register'));
  }

  private isMultipartFormData(method: string, url: string): boolean {
    return (method === 'POST' && (url.includes('restaurants') || url.includes('menus') ));
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  private loggedIn = new BehaviorSubject<boolean>(true);
  constructor(private loadingService: LoadingService)
  {}


  login(username: string, password: string): Observable<boolean>
  {
    this.loadingService.show();
    return new Observable<boolean>(observer =>
    {
      setTimeout(() =>
      {
        if (username === 'admin' && password === 'admin')
        {
          this.loadingService.hide();
          this.loggedIn.next(true);
          observer.next(true);
        }
        else
        {
          this.loadingService.hide();
          observer.next(false);
        }
        observer.complete();
      }, 2500);
    });
  }

  isLoggedIn(): Observable<boolean>
  {
    return this.loggedIn.asObservable();
  }

  logout(): void
  {
    this.loggedIn.next(false);
  }
}

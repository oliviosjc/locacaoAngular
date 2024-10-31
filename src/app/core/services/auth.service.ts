import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Simulação de login
  login(username: string, password: string): void
  {
    if (username === 'admin' && password === 'admin')
    {
      this.loggedIn.next(true);
    }
  }

  // Verifica se o usuário está logado
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}

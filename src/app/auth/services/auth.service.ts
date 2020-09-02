import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async onLogin(email: string, password: string) {
    try {
      const resultado = await this.afAuth.signInWithEmailAndPassword(email, password);
      return resultado;

    } catch (error) {
      console.log(error);
    }
  }
  async register(email: string, password: string) {
    try {
      const resultado = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }
  async logOut() {
    try {
      await this.afAuth.signOut();

    } catch (error) {
      console.log(error);
    }
  }
  getUserCurrent() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}

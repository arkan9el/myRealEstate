import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signInUser(email: string, password: string) {
    return new Promise (
      (resolve, reject) => {
        const myAuth = firebase.getAuth();
        firebase.signInWithEmailAndPassword(myAuth, email, password).then(
          (data) => {
            resolve(data);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.getAuth().signOut();
  }

}

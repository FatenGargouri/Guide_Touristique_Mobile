import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  constructor(private fireAuth: AngularFireAuth) { }
  private id = 'id';
  private connecte = 'non';
private password = 'password';

public creerNouvelUtilisateur(id: string, password: string) {
  return new Promise<any>((resolve, reject) => {
    this.fireAuth.createUserWithEmailAndPassword(id, password)
    .then(res => {
    resolve(res);
    localStorage.setItem(this.id, id);
    localStorage.setItem(this.connecte, 'oui');
    },
    err => reject(err));
    });
}
public getIdFromLocalStorage() {
  const s = localStorage.getItem(this.id);
  if (s !== null) {
  return s;
  }
  return '';
 }

public connecter(id: string, password: string) {
  return new Promise<any>((resolve, reject) => {
    this.fireAuth.signInWithEmailAndPassword(id, password)
    .then(res => {
    resolve(res);
    localStorage.setItem(this.id, id);
    localStorage.setItem(this.connecte, 'oui');
    },
    err => reject(err));
    });
 }

 public getConnecte(){
  return localStorage.getItem(this.connecte);
 }


 



 public deconnecter() {
  return new Promise<any>((resolve, reject) => {
    if (this.fireAuth.currentUser) {
    this.fireAuth.signOut()
    .then(res => {
    console.log('Déconnexion');
    localStorage.setItem(this.connecte, 'non');
    resolve(res);
    },
    err => reject(err));
    }
    });
 }

 
}


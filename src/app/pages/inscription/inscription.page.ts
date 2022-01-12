import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router: Router ,private authServ: AuthentificationService,
    private toastController: ToastController) 
    {}
  
    async onCreerUtilisateur(value: any) {
      this.authServ.creerNouvelUtilisateur(value.id, value.pass)
 .then(res => {
 console.log(res);
 this.router.navigateByUrl('/menu/home');
 }, err => {
 console.log(err);
 });
     }
     
  onGoLogin() {
    this.router.navigateByUrl('/authentification');
  }

  ngOnInit() {
  }

}

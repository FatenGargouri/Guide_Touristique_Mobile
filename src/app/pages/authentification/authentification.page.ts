import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private router: Router , private authServ: AuthentificationService , private toastController: ToastController) { }
  async onLogin(value: any) {
    this.authServ.connecter(value.id, value.pass)
 .then(res => {
 console.log(res);
 this.router.navigateByUrl('/menu/home');
 }, err => {
 console.log(err.message);
 });

   }

   private id = '';
   ngOnInit() {
    this.id = this.authServ.getIdFromLocalStorage();
   }

  onGoSignUp() {
    this.router.navigateByUrl('/inscription');
   }

  

  }

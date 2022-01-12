import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router, private autServ: AuthentificationService) { }

  ngOnInit() {
  }
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home', icone: 'home-outline'},
    {titre: 'Meteo', chemin: '/menu/meteo', icone: 'partly-sunny-outline'},
    {titre: 'Galerie', chemin: '/menu/galerie', icone: 'images-outline'},
    {titre: 'Endroits', chemin: '/menu/endroits', icone: 'navigate-outline'},
    {titre: 'Priere', chemin: '/menu/priere', icone: 'airplane-outline'},
    {titre: 'Contacts', chemin: '/menu/contacts', icone: 'person-add-outline'},
    {titre: 'Déconnexion', chemin: 'deconnexion', icone: 'log-out-outline'}
   ];

   onMenuItem(p) {
    if (p.chemin === 'deconnexion') {
    this.autServ.deconnecter();
    this.router.navigateByUrl('/authentification');
    } else {
    this.router.navigateByUrl(p.chemin);
    }
   }
   
   

}

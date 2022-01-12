import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {ContactsService} from '../../services/contacts.service';
@Component({
 selector: 'app-contacts',
 templateUrl: './contacts.page.html',
 styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
 nomModel: any = '';
 telModel: any = '';
 // Gérer l'opération de modification
 modeModif: boolean;
 TabContacts: any = [];
 contactAmodifier: any;
 constructor(private platform: Platform, private contServ: ContactsService)
{

 this.platform.ready().then(() => {
 this.contServ.creerBD();
 }).catch(error => {
 console.log(error);
 });
 }
 ngOnInit() {
 }
 ionViewWillEnter() {
 this.contServ.creerTable();
 this.remplir();
 }
 inserer() {
 if (this.nomModel.length === 0 || this.telModel.length === 0) {
 alert('Champ(s) vide(s)');
 }
 else {
 this.contServ.insererContact(this.nomModel, this.telModel)
 .then(() => {
 console.log('Contact inséré!');
 // Vider les champs après l'ajout
 this.nomModel = '';
 this.telModel = '';
 this.remplir();
 })
 .catch(e => {
 alert('erreur ' + JSON.stringify(e));
 });
 }
 }
 remplir() {
 this.contServ.getContacts()
 .then((res) => {
 this.TabContacts = [];
 if (res.rows.length > 0) {
 for (let i = 0; i < res.rows.length; i++) {
 this.TabContacts.push(res.rows.item(i));
 }
 }
 })
 .catch(e => {
 alert('erreur ' + JSON.stringify(e));
 });
 }

 supprimer(c: any) {
 this.contServ. supprimerContact(c)
 .then((res) => {
 console.log('Contact supprimé!');
 this.remplir();
 })
 .catch(e => {
 alert('erreur ' + JSON.stringify(e));
 });
 }
 activerModif(c: any) {
 this.modeModif = true;
 this.contactAmodifier = c;
 this.nomModel = c.nom;
 this.telModel = c.tel;
 }
 modifier() {
 this.contServ.modifierContact(this.contactAmodifier, this.nomModel,
this.telModel)
 .then(() => {
 console.log('Contact modifié!');
 this.modeModif = false;
 this.nomModel = '';
 this.telModel = '';
 this.remplir();
 })
 .catch(e => {
 alert('erreur ' + JSON.stringify(e));
 });
 }
}

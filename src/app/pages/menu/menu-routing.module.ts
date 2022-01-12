import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
const routes: Routes = [
 {
 path: '',
 component: MenuPage,
 children: [
 {
 path: 'home',
 loadChildren: () => import('../../home/home.module').then( m =>
m.HomePageModule)
 },
 {
 path: 'meteo',
 loadChildren: () => import('../meteo/meteo.module').then( m =>
m.MeteoPageModule)
 },
 {
 path: 'galerie',
 loadChildren: () => import('../galerie/galerie.module').then( m =>
m.GaleriePageModule)
 },
 {
 path: 'endroits',
 loadChildren: () => import('../endroits/endroits.module').then( m =>
m.EndroitsPageModule)
 },
 {
 path: 'priere',
 loadChildren: () => import('../priere/priere.module').then( m =>
m.PrierePageModule)
 },
 {
 path: 'contacts',
 loadChildren: () => import('../contacts/contacts.module').then( m =>
m.ContactsPageModule)
 },
 
  {
    path: 'endroit-nouveau',
    loadChildren: () => import('../endroit-nouveau/endroit-nouveau.module').then( m => m.EndroitNouveauPageModule)
  },
  {
    path: 'endroit-details',
    loadChildren: () => import('../endroit-details/endroit-details.module').then( m => m.EndroitDetailsPageModule)
  },
 ]
 }
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class MenuPageRoutingModule {}

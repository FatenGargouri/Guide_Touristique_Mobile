import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  ville: string;
  meteo1jour: any;
  meteo5jours: any;
  constructor(private meteoServ: MeteoService) {
  }
  ngOnInit() {
  }
  chargerMeteo() {
  this.meteo1jour = this.meteoServ.getMeteo1jour(this.ville)
  .subscribe(data => {
  this.meteo1jour = data;
  }, error => {
  console.log(error);
  });
  this.meteo5jours = this.meteoServ.getMeteo5jours(this.ville)
  .subscribe(data => {
  this.meteo5jours = data;
  }, error => {
  console.log(error);
  });
  }
 }

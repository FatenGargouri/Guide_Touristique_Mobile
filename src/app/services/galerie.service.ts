import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Endroit } from '../model/endroit.model';

@Injectable({
  providedIn: 'root'
})

export class GalerieService {
  public currentLocation: Endroit;

  constructor(private httpClient : HttpClient) { }

  getImages(motCle: string ,PageActuelle : number , ImagesParPage :number)
  {
    const hits='hits';
    return this.httpClient.get('http://pixabay.com/api/?key=15646595-375eb91b3408e352760ee72c8&q='+motCle + '&per_page=' + ImagesParPage + '&page=' + PageActuelle);
  }
}

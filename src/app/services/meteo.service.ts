import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient) {
  }

  getMeteo1jour(ville: string) {
  return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=c109c07bc4df77a88c923e6407aef864')
  }
  getMeteo5jours(ville: string) {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q=' + ville + '&appid=c109c07bc4df77a88c923e6407aef864')
}
}

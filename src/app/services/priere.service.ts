import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriereService {

  constructor(private httpClient : HttpClient) { }
  getPriereInfo(city: string )
  {
    return this.httpClient.get('https://api.pray.zone/v2/times/today.json?city='+ city);
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FlowerBouquet} from '../models/flowerBouquet';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlowerBouquetService {
  private flowerBouquetsUrl=environment.flowerBouquetsUrl;

  constructor(private http :HttpClient) { }

  getFlowerBouquets(): Observable<FlowerBouquet[]>{
    return this.http.get<any>(this.flowerBouquetsUrl);
  }

  groupByFlowersBouquets():Observable<FlowerBouquet[]>{
        return this.http.get<any>(this.flowerBouquetsUrl+"/group-by-size");


  }

  getFlowerBouquet(id:number):Observable<FlowerBouquet>{
    const url= `${this.flowerBouquetsUrl}/${id}`;
    return this.http.get<FlowerBouquet>(url);
  }
  


}

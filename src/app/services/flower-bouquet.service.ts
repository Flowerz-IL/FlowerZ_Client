import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FlowerBouquet} from '../models/flowerBouquet';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerBouquetService {
  currentBouquetId=new BehaviorSubject<string>("");

  setCurrentBouquet(id: string) {
    this.currentBouquetId.next(id);
  }
  private flowerBouquetsUrl=environment.flowerBouquetsUrl;

  constructor(private http :HttpClient) { }

  getFlowerBouquets(): Observable<FlowerBouquet[]>{
    return this.http.get<any>(this.flowerBouquetsUrl);
  }

  groupByFlowersBouquets():Observable<FlowerBouquet[]>{
        return this.http.get<any>(this.flowerBouquetsUrl+"/group-by-size");


  }

  getFlowerBouquet(id:string):Observable<FlowerBouquet>{
    const url= `${this.flowerBouquetsUrl}/${id}`;
    return this.http.get<FlowerBouquet>(url);
  }
  


}

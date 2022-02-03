import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DishInterface} from "../interfaces/dish.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  public getSoups(): Observable<DishInterface[]> {
    return this.http.get<DishInterface[]>('https://cafe-ad898-default-rtdb.firebaseio.com/soups.json')
  }

  public getSalads(): Observable<DishInterface[]> {
    return this.http.get<DishInterface[]>('https://cafe-ad898-default-rtdb.firebaseio.com/salads.json')
  }

  public getDrinks(): Observable<DishInterface[]> {
    return this.http.get<DishInterface[]>('https://cafe-ad898-default-rtdb.firebaseio.com/drinks.json')
  }

  public getDesserts(): Observable<DishInterface[]> {
    return this.http.get<DishInterface[]>('https://cafe-ad898-default-rtdb.firebaseio.com/desserts.json')
  }

}

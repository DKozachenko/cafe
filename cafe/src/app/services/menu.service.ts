import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DishInterface} from "../interfaces/dish.interface";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

}

import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {DishInterface} from "../../interfaces/dish.interface";
import {interval} from "rxjs";

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.sass']
})
export class CheckComponent implements OnInit {
  public name: string = ''
  public orderDish: DishInterface[] = []
  public isLoad: boolean = false


  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name') ?? ''
    this.orderDish = this.menuService.order

    const period = interval(3000)

    this.isLoad = true
    period.subscribe(() => {
      this.isLoad = false
    })
  }

  public getSum(): number {
    let sum: number = 0

    for (let order of this.orderDish) {
      sum += order.price
    }

    return sum
  }

}

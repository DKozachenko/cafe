import {Component, ElementRef, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {DishInterface} from "../../interfaces/dish.interface";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public drinks: DishInterface[] = []
  public salads: DishInterface[] = []
  public soups: DishInterface[] = []
  public desserts: DishInterface[] = []
  public currentDishes: DishInterface[] = []

  public isLoadDrinks: boolean = false
  public isLoadSalads: boolean = false
  public isLoadSoups: boolean = false
  public isLoadDesserts: boolean = false

  public slideConfig = {"slidesToShow": 4, "slidesToScroll": 1}
  public icon: ElementRef<any> = new ElementRef<any>('icon')

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getSoups()
      .subscribe((soups: DishInterface[]) => {
        this.soups = Object.values(soups)
        this.isLoadSoups = true
      })

    this.menuService.getSalads()
      .subscribe((salads: DishInterface[]) => {
        this.salads = Object.values(salads)
        this.isLoadSalads = true
      })

    this.menuService.getDesserts()
      .subscribe((desserts: DishInterface[]) => {
        this.desserts = Object.values(desserts)
        this.isLoadDesserts = true
      })

    this.menuService.getDrinks()
      .subscribe((drinks: DishInterface[]) => {
        this.drinks = Object.values(drinks)
        this.currentDishes = this.drinks
        this.isLoadDrinks = true
      })
  }

  public isLoading(): boolean {
    return this.isLoadSoups && this.isLoadDrinks && this.isLoadSalads && this.isLoadDesserts
  }

  public orderDish(item: DishInterface): void {
    const newView = this.currentDishes.filter((dish: DishInterface) => {
      return dish.id !== item.id
    })

    if (this.currentDishes == this.soups) {
      this.soups = newView
    }
    if (this.currentDishes == this.drinks) {
      this.drinks = newView
    }

    if (this.currentDishes == this.salads) {
      this.salads = newView
    }
    if (this.currentDishes == this.desserts) {
      this.desserts = newView
    }

    this.currentDishes = newView
    this.menuService.order.push(item)
    console.log(this.menuService.order)
  }

  public isOrderEmpty(): boolean {
    return this.menuService.order.length < 1
  }


}

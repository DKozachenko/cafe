import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {DishInterface} from "../../interfaces/dish.interface";

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

  public isLoad: number[] = [0, 0, 0, 0]

  public slideConfig = {"slidesToShow": 4, "slidesToScroll": 1}

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getSoups()
      .subscribe((soups: DishInterface[]) => {
        this.soups = Object.values(soups)
        this.isLoad[0] = 1
      })

    this.menuService.getSalads()
      .subscribe((salads: DishInterface[]) => {
        this.salads = Object.values(salads)
        this.isLoad[1] = 1
      })

    this.menuService.getDesserts()
      .subscribe((desserts: DishInterface[]) => {
        this.desserts = Object.values(desserts)
        this.isLoad[2] = 1
      })

    this.menuService.getDrinks()
      .subscribe((drinks: DishInterface[]) => {
        this.drinks = Object.values(drinks)
        this.currentDishes = this.drinks
        this.isLoad[3] = 1
      })
  }

  public isLoading(): boolean {
    let sum = 0
    for (let i = 0; i < 4; ++i) {
      sum += this.isLoad[i]
    }

    return sum == 4
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
  ];





}

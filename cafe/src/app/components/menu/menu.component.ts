import {Component, ElementRef, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public el: ElementRef = new ElementRef<any>('slider')

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {

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
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}

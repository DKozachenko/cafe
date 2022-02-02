import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(DialogComponent)
  }

  ngOnInit(): void {
  }

}

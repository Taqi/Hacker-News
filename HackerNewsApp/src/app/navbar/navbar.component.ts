import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../Models/menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() menuItems: MenuItem[]

  constructor() { }

  ngOnInit(): void {
  }

}

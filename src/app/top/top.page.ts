import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
  shop: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  navigate = () => {
    this.router.navigate(['/map-item-search']);
  }

}

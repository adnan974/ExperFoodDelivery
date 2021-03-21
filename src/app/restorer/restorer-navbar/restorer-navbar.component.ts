import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'efd-restorer-navbar',
  templateUrl: './restorer-navbar.component.html',
  styleUrls: ['./restorer-navbar.component.scss']
})
export class RestorerNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(link:string){

    this.router.navigate([link]);

  }

}

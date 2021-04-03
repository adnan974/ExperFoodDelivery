import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-customer-profil-show',
  templateUrl: './customer-profil-show.component.html',
  styleUrls: ['./customer-profil-show.component.scss']
})
export class CustomerProfilShowComponent implements OnInit {

  @Input() user: User | undefined;
  
  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  navigate(link: string) {
    this.route.navigate([link]);
  }

  delete(id: number) {

  }
}

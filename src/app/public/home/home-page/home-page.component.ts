import { AfterViewChecked, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'efd-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy, AfterViewChecked {

  toolbar = document.querySelector('.efd-navbar');
  loadingPage: boolean = true;

  constructor(private authService: AuthService) { }

  @HostListener('window:scroll', ['$event'])
  track(event: any) {

    const position = event.path[1].scrollY;

    if (this.loadingPage && this.toolbar) {
      this.toolbar.classList.remove('efd-navbar-scroll-down');
      this.toolbar.classList.remove('efd-navbar-transparent');
    }else if (!this.loadingPage && this.toolbar) {
      if (position > 50) {
        this.toolbar.classList.add('efd-navbar-scroll-down');
        this.toolbar.classList.remove('efd-navbar-transparent');
      } else {
        this.toolbar.classList.remove('efd-navbar-scroll-down');
        this.toolbar.classList.add('efd-navbar-transparent');
      }
    }
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.toolbar && this.toolbar.classList.add('efd-navbar-transparent');
  }

  ngAfterViewChecked(): void {
    this.loadingPage = false;
  }

  ngOnDestroy(): void {
    if (this.toolbar) {
      this.toolbar.classList.remove('efd-navbar-scroll-down');
      this.toolbar.classList.remove('efd-navbar-transparent');
    }
  }

}

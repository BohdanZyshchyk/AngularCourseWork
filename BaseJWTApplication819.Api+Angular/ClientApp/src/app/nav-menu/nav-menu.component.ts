import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { MemeService } from '../Services/meme.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  isLogin: boolean = false;
  isAdmin: boolean = false;
  isVisible: boolean = false;
  constructor(private authService: AuthService,
    private memeServ:MemeService) { 
      this.memeServ.onAdd.subscribe(()=>{
        this.isVisible = false;
      });
    }

  ngOnInit() {
    var token = localStorage.getItem('token');
    if (token != null) {
      this.isLogin = true;
      this.isAdmin = this.authService.isAdmin();
    }
    else {
      this.isLogin = false;
      this.isAdmin = false;
    }
    this.authService.statusLogin.subscribe(
      (data) => {
        this.isLogin = data;
        this.isAdmin = this.authService.isAdmin();
      }
    )
  }

  Logout() {
    this.authService.Logout();
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  showModal(){
    this.isVisible= true;
   }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public users:any = [];
  constructor(
    
    private router: Router
  ){}

  ngOnInit () {
    //.api.getUsers()
    //.subscribe((res: any)=>{
      //this.users = res;
    }
  }

  



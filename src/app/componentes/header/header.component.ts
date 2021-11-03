import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public autorizacionService: AutorizacionService) { }
  
  ngOnInit(): void {

  }

  logOut(){
    this.autorizacionService.logOut();
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Smartphone } from './smartphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  smartphone: Smartphone[] = [];
  headers: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getSmartphones();
  }

  title = 'angular-httpclient';

  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        console.log(data);
      });
  }
  

  getSmartphoneById(id: any) {
    this.api.getSmartphoneById(id)
      .subscribe(data => {
        console.log(data);
      });
  }
  
  
  
}

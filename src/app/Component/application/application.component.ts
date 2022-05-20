import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  

  constructor(private router:Router) {
    console.log("see router url",router.url); 
    
  }

  ngOnInit(): void {
  }

}

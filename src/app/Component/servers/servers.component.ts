import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  webserverTab:boolean=true
  applicationServerTab:boolean
  databaseServerTab:boolean
  constructor() { }

  ngOnInit(): void {
  }

  webServer()
  {
    this.webserverTab=true
    this.applicationServerTab=false
    this.databaseServerTab=false
  }
  applicationServer()
  {
    this.webserverTab=false
    this.applicationServerTab=true
    this.databaseServerTab=false
  }

  databaseServer()
  {
    this.webserverTab=false
    this.applicationServerTab=false
    this.databaseServerTab=true
  }
}

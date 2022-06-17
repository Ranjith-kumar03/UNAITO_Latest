import { Component, OnInit } from '@angular/core';
import { LoaderutilityService } from '../loaderutility.service';

@Component({
  selector: 'app-loader-busy',
  templateUrl: './loader-busy.component.html',
  styleUrls: ['./loader-busy.component.css']
})
export class LoaderBusyComponent implements OnInit {
 loader;
  constructor(private _loaderUtility: LoaderutilityService) { 
    this._loaderUtility.loader.subscribe((load)=>{
      this.loader = load
    })
  }

  ngOnInit(): void {
  }

}

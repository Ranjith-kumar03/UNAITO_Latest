import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderutilityService {
loader = new BehaviorSubject<Boolean>(false);
  constructor(_httpClient: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private valuess=new BehaviorSubject<any>(0);


  constructor() { }

  setValue(newValue:any){
    this.valuess.next(newValue);
  }

  getSubscription(){
    return this.valuess.asObservable();
  }


}

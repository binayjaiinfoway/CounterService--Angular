import { Component } from '@angular/core';
import { UserDataService } from 'src/Services/user-data.service';

@Component({
  selector: 'app-child-button',
  templateUrl: './child-button.component.html',
  styleUrls: ['./child-button.component.css']
})
export class ChildButtonComponent {

  value: any = 0;

  constructor(private svc:UserDataService){}

  decrement(){
if(this.value > 0)this.value--;
this.svc.setValue(this.value);
  }

  increment(){
this.value++;
this.svc.setValue(this.value);
  }
  

}

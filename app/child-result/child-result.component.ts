import { Component ,OnInit  } from '@angular/core';
import { UserDataService } from 'src/Services/user-data.service';

@Component({
  selector: 'app-child-result',
  templateUrl: './child-result.component.html',
  styleUrls: ['./child-result.component.css']
})
export class ChildResultComponent  implements OnInit{

  value:number =0 ;

  constructor(private svc:UserDataService){}
  ngOnInit(): void {
    this.svc.getSubscription().subscribe((data) =>{
      this.value =data;
    }); 
  }
}

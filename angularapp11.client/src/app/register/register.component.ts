import { Component } from '@angular/core';
import { AdnanServiceService } from '../service/adnan-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _ser: AdnanServiceService) { }

  ngOnInit() {
    
  }

  

  postData(data:any) {
    this._ser.postNewUser(data).subscribe(() => {
      alert("add new user");
    });
  }

}

import { Component } from '@angular/core';
import { AdnanServiceService } from '../service/adnan-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {


  constructor(private _ser: AdnanServiceService) { }

  ngOnInit() {

  }



  postData(data: any) {
    this._ser.postNewCategory(data).subscribe(() => {
      alert("add new Product");
    });
  }

}

import { Component } from '@angular/core';
import { AdnanServiceService } from '../service/adnan-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private _ser: AdnanServiceService) { }

  ngOnInit() {

  }



  postData(data: any) {
    this._ser.postNewProduct(data).subscribe(() => {
      alert("add new PRODUCT");
    });
  }

}

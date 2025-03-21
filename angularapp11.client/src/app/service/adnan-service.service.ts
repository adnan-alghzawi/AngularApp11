import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdnanServiceService {

  constructor(private _url: HttpClient) { }

  postNewUser(data:any): Observable<any> {
    return this._url.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this._url.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }

  postNewCategory(data: any): Observable<any> {
    return this._url.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);
  }

  postNewProduct(data: any): Observable<any> {
    return this._url.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }

}

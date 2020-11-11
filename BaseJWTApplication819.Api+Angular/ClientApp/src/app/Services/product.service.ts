import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  baseUrl = "/api/Product";
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}

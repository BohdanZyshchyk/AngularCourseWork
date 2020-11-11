import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private prodService:ProductService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.prodService.getAllProducts().subscribe(
      data =>{
        console.log(data);
        this.listOfData = data
        this.spinner.hide();
      }
    )
  }
  listOfColumn = [
    {
      title: 'Image',
    },
    {
      title: 'Title',
    },
    {
      title: 'Price',
    },
    {
      title: 'Description',
    }
  ];
  listOfData: Product[] = [];

}

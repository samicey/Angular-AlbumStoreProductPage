import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

private _albumUrl = '../asimport { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  constructor(private _productService: ProductService) { 
    
  }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response=>this.albumInfo = response)
  }

}
sets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response)=>response.json())
  }

}

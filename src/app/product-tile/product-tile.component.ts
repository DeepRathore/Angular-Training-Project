import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  @Input() productData: any;

  constructor() { }

  ngOnInit(): void {
  }

}

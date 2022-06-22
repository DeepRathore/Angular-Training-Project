import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FetchProductsApiService} from '../fetch-products-api.service'

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {
  addProdForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private FetchProductsApiService: FetchProductsApiService) { }

  ngOnInit(): void {
    this.addProdForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  submitForm() {
    if(this.addProdForm.invalid) {
      return;
    }
    this.FetchProductsApiService.addProduct(this.addProdForm.value) 
    .subscribe(res => {
      if (res) {
        alert('Product added');
      }
    });
  }
}

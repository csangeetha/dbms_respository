import { Component, OnInit } from '@angular/core';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers : [CustomerService]
})
export class CustomerComponent implements OnInit {
  //Datatypes
  categories: any;
  typeOfUser: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCategories().subscribe((resp:any) => {
    this.categories = resp.categories;
  });
  }
 

}

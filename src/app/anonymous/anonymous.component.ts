import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/service/customer.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.scss'],
  providers: [CustomerService]
})
export class AnonymousComponent implements OnInit {
  categories: any;
  typeOfUser: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCategories().subscribe((resp:any) => {
      this.categories = resp.categories;
  });
}

}

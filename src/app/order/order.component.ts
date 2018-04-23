import { Component, OnInit } from '@angular/core';
import {OrderService} from './service/order.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers : [OrderService]
})
export class OrderComponent implements OnInit {
  orders:any;
  user: any;
  constructor(private os:OrderService, private dataService : DataService,private router: Router) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=>{this.user=user;
      this.os.getAllOrders(user.customerId).subscribe(orders => this.orders=orders)
    });
    
  }

  writeReview(orderId){
    console.log(orderId);
    this.router.navigate(['/review-order/'+orderId])
    
  }

}

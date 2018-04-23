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
  resOrders : any;
  constructor(private os:OrderService, private dataService : DataService,private router: Router) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=>{this.user=user;
      console.log(user);
      
      if(user.type=='customer'){
        this.os.getAllOrders(user.customerId).subscribe(orders => this.orders=orders);
      }
      if(user.type=='owner'){
        this.os.getAllOwnerOrders(user.userId).subscribe(orders => this.resOrders=orders)
      }
      
    });
    
  }

  writeReview(orderId){
    console.log(orderId);
    this.router.navigate(['/review-order/'+orderId])
    
  }
  update(order){
    
    var newOrder={
      orderId: order.orderId,
      dateOfOrder: order.dateOfOrder,
      orderTotal: order.orderTotal,
      paymentType: order.paymentType,
      status: 'delivered'
    }
    console.log(newOrder);
    this.os.updateOrder(newOrder).subscribe(msg=>{
      this.os.getAllOwnerOrders(this.user.userId).subscribe(orders => this.resOrders=orders)
    })
  }

}

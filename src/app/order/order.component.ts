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
  adminOrders : any;
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
      if(user.type=='admin'){
        this.os.getAdminOrders().subscribe(orders => this.adminOrders=orders)
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

  updateOrder(order){
    this.dataService.changeUpdateOrder(order);
    this.router.navigate(['update-order'])

  }

  deleteOrder(orderId){
    console.log(orderId);
    this.os.deleteOrder(orderId).subscribe(msg => {console.log(msg)
      if(this.user.type=='customer'){
        this.os.getAllOrders(this.user.customerId).subscribe(orders => this.orders=orders);
      }
      if(this.user.type=='owner'){
        this.os.getAllOwnerOrders(this.user.userId).subscribe(orders => this.resOrders=orders)
      }
      if(this.user.type=='admin'){
        this.os.getAdminOrders().subscribe(orders => this.adminOrders=orders)
      }
      
    });
  }

}

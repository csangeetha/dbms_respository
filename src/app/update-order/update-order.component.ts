import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import{DataService } from '../data.service';
import { OrderService } from '../order/service/order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss'],
  providers : [OrderService]
})
export class UpdateOrderComponent implements OnInit {
  user:any ={
    type: '',
    userId : ''

  }

  data : any;
  constructor(private os : OrderService, private dataService : DataService,private router : Router ) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> this.user=user);
    this.dataService.currentToUpdateOrder.subscribe(order => this.data= order);
  }

  onSubmit(){
    console.log(this.data);

    var newOrder={
      orderId: this.data.orderId,
      dateOfOrder: this.data.dateOfOrder,
      orderTotal: this.data.orderTotal,
      paymentType: this.data.paymentType,
      status: this.data.status
    }
    
    this.os.updateOrder(newOrder).subscribe(msg=>{ console.log(msg)
      if(msg==1){
        alert("update success");
        this.router.navigate(['orders']);
      } 
    });
    
  }

}

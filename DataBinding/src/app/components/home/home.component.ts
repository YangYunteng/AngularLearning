import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public msg: any = "这是一个首页组件";
  username = "张三";
  flag: boolean = true;
  search: any;

  constructor() { 
    this.search=''
  }

  ngOnInit(): void {
  }

  //自定义方法
  getMsg() {
    alert(this.msg);
  }
  setUserName() {
    this.username = "改变后的值--李四";
  }
  //默认时间对象 e
  keyupFun(event) {
    //event 时间对象
    console.log(event);
    if (event.keyCode == 13) {
      alert("按回车了")
    }
  }
}

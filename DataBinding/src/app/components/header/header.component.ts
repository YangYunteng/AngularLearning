import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title='这是一个头部组件';
  
  constructor() { }/* 构造函数 */

  /* 生命周期函数，加载触发的方法 */
  ngOnInit(): void {
  }

}

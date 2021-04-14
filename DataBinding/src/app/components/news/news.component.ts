import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = "你好 Angular!"; /* 属性 */

  // typeScript语法
  msg: any; /*另一种定义属性的方法 */

  //定义属性可是使用修饰符
  public msg1: string = "这是string类型变量";
  /* 声明属性的几种方式 */
  /* 
    public 默认 公有 可以再这个类中使用、也可以在类外面使用
    protected 保护  只有在当前类和他的子类中才可以使用
    private  私有 只有当前类才可以使用
  */

  //private 是无法进行数据绑定的，因为其作用域只有当前类
  public test: any = "test";
  constructor() { }


  //属性绑定
  public id: string = "123";


  public h: string = "";


  //数据循环
  public list: any[] = [];

  public list2: any[] = [];

  public list3: any[] = [];

  public list4: any[] = [];
  //对象
  public obj = {
    name: '张三'
  }
  ngOnInit(): void {
    this.msg = "这是msg，另一种定义属性的方法"

    //假设去后台请求数据到h（数据中可能有html）
    this.h = "<h2>这是新闻的数据</h2>"
    this.list = ['1111', '2222', '3333'];
    this.list2 = ["数学", "语文", "英语"];
    this.list3.push({ title: "111111" });
    this.list3.push({ title: "222222" });
    this.list3.push({ title: '333333' });

    this.list4 = [
      {
        carName: "宝马",
        categories: [
          { category: "宝马X1" },
          { category: "宝马X2" },
          { category: "宝马X3" },
          { category: "宝马X4" }
        ]
      },
      {
        carName: "奥迪",
        categories: [
          { category: "奥迪Q1" },
          { category: "奥迪Q1" },
          { category: "奥迪Q1" },
          { category: "奥迪Q1" }
        ]
      }
    ]
  }

}

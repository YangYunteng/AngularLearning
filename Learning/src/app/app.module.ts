//根模块会告诉Angular如何组装模块
//引入模块

import { NgModule } from '@angular/core'; //Angular核心模块
import { BrowserModule } from '@angular/platform-browser'; //浏览器解析模块

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; //自定义模块


/*
  @NgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。
  @NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
*/
@NgModule({
  // 自定义组件都需要引入并进行配置
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //当前项目依赖哪些模块
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //定义的服务
  providers: [],

  //默认启动那个组件
  bootstrap: [AppComponent]
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块，但是一定要写

export class AppModule { }

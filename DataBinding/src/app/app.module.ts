// 根模块会告诉Angular如何组装模块
// 引入模块

import { NgModule } from '@angular/core'; // Angular核心模块
import { BrowserModule } from '@angular/platform-browser'; // 浏览器解析模块
import { FormsModule } from '@angular/forms'; // 需要引入表单模块
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component'; // 自定义模块

// 引入服务
import { StorageService } from './services/storage.service';

/*
  @NgModule装饰器将AppModule标记为Angular模块类（也叫NgModule类）。
  @NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
*/
@NgModule({
  // 自定义组件都需要引入并进行配置
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    TodoListComponent
  ],
  // 当前项目依赖哪些模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 定义的服务
  providers: [StorageService],

  // 默认启动那个组件
  bootstrap: [AppComponent]
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块，但是一定要写

export class AppModule { }

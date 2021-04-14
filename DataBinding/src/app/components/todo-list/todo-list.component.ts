import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public item: string;
  public list: any[] = [];
  // public storage = new StorageService(); /* 可以使用此种方法来引入服务，但是官方不推荐 */

  // 依赖注入方式注入服务
  constructor(private storage: StorageService) {
    this.item = '';
    this.storage.setItem('userInfo', '张三');
    console.log(this.storage);
  }

  ngOnInit(): void {
    const todolist = this.storage.getItem('todolist');
    if (todolist) {
      this.list = todolist;
    }
  }
  addItem(e): void {
    if (e.keyCode === 13 && this.item !== '') {
      const itemObj = {
        itemName: this.item,
        status: 0,
      };

      this.list.push(itemObj);
      this.storage.setItem('todolist', this.list);
      this.item = '';
    }
  }

  deleteItem(index): void {
    this.list.splice(index, 1);
    this.storage.setItem('todolist', this.list);
  }
  changeStatus(i, status): void {
    this.list[i].status = status;
    this.storage.setItem('todolist', this.list);
  }



}

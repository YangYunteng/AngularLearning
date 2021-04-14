import { Component } from '@angular/core'; /* 引入angular Component*/

@Component({
  selector: 'app-root',  /*组件的名称*/
  templateUrl: './app.component.html',/* html */
  styleUrls: ['./app.component.css']  /* css */
})
export class AppComponent { /* 数据 */
  title = 'Learning';
}

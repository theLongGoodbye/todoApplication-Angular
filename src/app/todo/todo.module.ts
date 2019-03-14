import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { LoginComponent } from './login/login.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [LoginComponent, TodoComponent, ItemsComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class TodoModule { }

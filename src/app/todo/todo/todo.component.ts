import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Item} from '../item';

const log = console.log.bind(console)
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  username: string
  isVisible = false;
  planNameArray = []
  planNames: string[]
  isShow = false
  selected: any
  items: Item[]
  id: number
  doneId

  constructor(private store: LocalStorageService) { }

  toggle(planName) {
    this.selected = planName
    this.isShow = true
  }

  getId() {
    if (this.store.get('idNumber')) {
      this.id = this.store.get('idNumber') + 1
      this.store.set('idNumber', this.id)
    } else {
      this.store.set('idNumber', 1)
      this.id = 1
    }
    return this.id
  }


  done(id) {
    this.doneId = id
    console.log('子组件', this.doneId)
  }


  commit(planInputValue:string) {

    this.id = this.getId()
    let p = planInputValue
    if (!p) {return}
    p = p.trim()
    let item: Item = {item: p, id: this.id}
    this.items.push(item)
    const oldArray = this.store.get('items') || []
    this.store.set('items', oldArray.concat(item))
}


  openAddListModal() {
    // 出一个弹窗
    this.isVisible = true
  }

  handleCancel() {
    this.isVisible = false
  }

  handleOk(value: string) {
    if (value) {
      this.planNameArray.push(value)
      let p = 'planName'
      if (!this.store.get(p)) {
        this.store.set(p, this.planNameArray)
      } else {
        const oldArray = this.store.get(p)
        this.store.set(p, oldArray.concat(value))
      }
      this.planNames = this.store.get(p)
      this.isVisible = false
    }

  }

  ngOnInit() {
    this.username = this.store.get('username')
    this.planNames = this.store.get('planName')
    this.items = this.store.get('items') || []
  }

}

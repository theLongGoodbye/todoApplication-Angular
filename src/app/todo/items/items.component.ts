import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() items: any
  @Input() doneId: number
  idDone = false
  selected: any
  editId = undefined
  @Output() doneItem = new EventEmitter<string>();
  constructor(private store: LocalStorageService) { }

  findIndex(id, items) {
    return items.findIndex((element) => element.id  == id)
  }

  done(id) {
    let items = this.store.get('items')
    let index = this.findIndex(id, items)
    items[index].isDone = true
    this.items = items
    this.store.set('items', items)
  }

  delete(id) {
    let items = this.store.get('items')
    let index = this.findIndex(id, items)
    items.splice(index, 1)
    this.items = items
    this.store.set('items', items)
  }

  edit(id) {
    this.editId = id
}

  update() {
    this.store.set('items', this.items)
    // 在这里更新到 localStorage 中
    this.editId = undefined
  }


  ngOnInit() {

  }

}

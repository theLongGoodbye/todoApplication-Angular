import { Injectable } from '@angular/core';
const ls = localStorage

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {

  get(key: string) {
    const value = ls.getItem(key)
    return JSON.parse(ls.getItem(key))
  }

  // getList<T>(key: string) {
  //   const before = ls.getItem(key);
  //   return before ? (JSON.parse(before)) : [];
  // }

  set(key: string, value: any): void {

    if (!value && value === undefined) { return; }
    value = JSON.stringify(value)
    ls.setItem(key, value);
  }
  constructor() { }
}

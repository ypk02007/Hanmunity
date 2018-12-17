import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempService {
  text = "";
  constructor() { }
  
  insertObj(obj) {
    this.text = obj;
  }
  getObj() {
    const r = this.text;
    this.text = "";
    return r;
  }
}

import { Component } from '@angular/core';
import { Item } from "./item";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  allItems: Item[] = [];
  get items() {
    return this.allItems;
  }

  addItem(header: string, description: string) {
    this.allItems.unshift({
      header,
      description
    });
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }



}

import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: List[];

  constructor() { }

  ngOnInit() {
    this.lists = [
      {id: 1, title: 'Shopping'},
      {id: 2, title: 'Mikes party'}
    ];
  }

}

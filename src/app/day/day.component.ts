import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor() { }
  name='programmer'
  msg='hloo programmers welcome to python'
  person={
    name:'muneera',
    age:'23',
    place:'mlpm'
  }
  d=new Date();
  ngOnInit(): void {
  }

}

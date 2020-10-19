import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name = 'Kobi';
  date: Date;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

}

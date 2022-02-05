import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Joseph Kamore', 'Find an online version and watch merlin find his son',new Date(2020,3,14),'Joseph'),
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

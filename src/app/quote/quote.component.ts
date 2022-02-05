import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Mickey Rooney', 'You always pass failure on the way to success',new Date(2022,2,4),'Joseph'),
    new Quote(1, 'A.A. Mine', 'You’re braver than you believe, and stronger than you seem, and smarter than you think.',new Date(2022,2,4),'Kamore'),
    new Quote(1, 'Zig Ziglar', 'Positive thinking will let you do everything better than negative thinking will.',new Date(2022,2,4),'Wairimu'),
   
  ];

 



  Hide(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }



  completeQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

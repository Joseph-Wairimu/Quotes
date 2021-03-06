import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  } 


  vote= 0;
  count(type:string){
    
    type==='add'?this.vote++:this.vote--
  }
  votee=0;
  countt(type:string){
    
    type==='add'?this.votee++:this.vote--
  }
  constructor() { }

  ngOnInit(): void {
  }

}

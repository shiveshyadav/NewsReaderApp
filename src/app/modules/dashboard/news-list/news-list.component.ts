import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  @Input() newsList: any; 
  @Input() category:string
  

  ngOnInit() {
  }

}

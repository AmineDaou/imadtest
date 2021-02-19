import { Guide } from './../../model/guide.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-show',
  templateUrl: './guide-show.component.html',
  styleUrls: ['./guide-show.component.css']
})
export class GuideShowComponent implements OnInit {
  @Input()
  selectedGuide: Guide;
  constructor() { }

  ngOnInit(): void {
  }

}

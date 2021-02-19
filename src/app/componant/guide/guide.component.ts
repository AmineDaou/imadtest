import { GuideService } from './../../service/guide.service';
import { Guide } from './../../model/guide.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  selectedGuide: Guide;
  constructor(private guideService: GuideService) { }

  ngOnInit(): void {
  }
  setSelectedGuide($event: Guide){
    this.selectedGuide = $event;
    // console.log(this.selectedGuide);
  }

  updateGuide($event: Guide){
    this.selectedGuide = this.guideService.updateGuide(this.selectedGuide, $event);
    // console.log(this.selectedGuide);


  }


}

import { GuideService } from './../../service/guide.service';
import { Guide } from './../../model/guide.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guide-update',
  templateUrl: './guide-update.component.html',
  styleUrls: ['./guide-update.component.css']
})
export class GuideUpdateComponent implements OnInit {


  @Input()
  selectedGuide: Guide;

  @Output()
  updatedGuideEventEmitter= new EventEmitter<Guide>();

  guideForm: FormGroup;
  isUnique: boolean = true;

  selectedFile: File = null;

  constructor(private guideService: GuideService, private http: HttpClient) { }

  ngOnInit(): void {
    this.initFormGroup();
  }
  initFormGroup(){
    this.guideForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  updateGuide(value){
    if (this.guideService.isUnique(value.title,this.selectedGuide)) {
      this.isUnique = true;
      this.updatedGuideEventEmitter.emit(value);
      this.initFormGroup();
    }
    else{
      this.isUnique = false;
    }
  }

  onFilesSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }
  onUploadFiles(){

    console.log(this.selectedFile);
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    // this.http.post('https://frontend-test-649a9-default-rtdb.firebaseio.com/',fd).subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    // );


  }

}

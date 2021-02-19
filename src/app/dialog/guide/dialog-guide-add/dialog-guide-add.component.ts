import { GuideService } from './../../../service/guide.service';
import { Guide } from './../../../model/guide.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-guide-add',
  templateUrl: './dialog-guide-add.component.html',
  styleUrls: ['./dialog-guide-add.component.css']
})
export class DialogGuideAddComponent implements OnInit {

  newGuide: Guide;
  isUnique: boolean = true;

  guideForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<Guide>,
    @Inject(MAT_DIALOG_DATA) public data: any, private guideService: GuideService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newGuide = new Guide();
    this.guideForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  addGuide(value){
    console.log(value);

  }

  onCreate(){
    if (this.guideService.isUnique2(this.newGuide.title)){
      this.isUnique = true;

      this.data = this.newGuide;
      this.dialogRef.close(this.newGuide);

      this.snackBar.open('<'+ this.newGuide.title + '> Added Successfully!');
    } else{
      this.isUnique = false;
    }
  }

}

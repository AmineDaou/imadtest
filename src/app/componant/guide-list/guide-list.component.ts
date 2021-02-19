import { DialogGuideDeleteComponent } from './../../dialog/guide/dialog-guide-delete/dialog-guide-delete.component';
import { DialogGuideAddComponent } from './../../dialog/guide/dialog-guide-add/dialog-guide-add.component';
import { Guide } from './../../model/guide.model';
import { GuideService } from './../../service/guide.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {

  @Output()
  selectedGuideEventEmitter= new EventEmitter();

  guides : Array<Guide>;
  guideSearch: string;
  newGuide: Guide;

  constructor(private guideService: GuideService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.guideService.initGuides();
    this.guides = this.guideService.getGuides();
  }
  onSelectGuide(selectedGuide: Guide):void{
    this.selectedGuideEventEmitter.emit(selectedGuide);

  }
  onAddNewGuide(): void{
    this.newGuide = new Guide();
    let dialogRef = this.dialog.open(DialogGuideAddComponent, {
      height: '550px',
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(
      result =>{
        if (result !== "false"){
          console.log(result);
          this.newGuide.title = result.title;
          this.newGuide.description = result.description;
          this.guideService.guides.push(this.newGuide);
        }

      }
    );
  //   let dialogRef = dialog.open(UserProfileComponent, {
  //     height: '400px',
  //     width: '600px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`); // Pizza!
  //   });

  //   dialogRef.close('Pizza!');

   }
   onDeleteGuide(g: Guide): void{
    let dialogRef = this.dialog.open(DialogGuideDeleteComponent);
    dialogRef.afterClosed().subscribe(
      result =>{
        if (result === "true"){
          this.guideService.deleteGuide(g);

        }
        else{
          this.snackBar.open('Delete Cancelled!')
        }

      }
    );
   }

   onSearchGuides(): void{
     console.log(this.guideSearch);
     let newSelectedGuide = new Array<Guide>();
     this.guideService.guides.forEach(g => {
       if (g.title.toLowerCase().includes(this.guideSearch.toLowerCase())){
          newSelectedGuide.push(g);
       }
     })

     this.guides = newSelectedGuide;


   }

   onCancelSearch(){
     this.guides = this.guideService.getGuides();
   }

   onClick(){
     console.log('ok');

   }

}

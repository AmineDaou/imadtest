import { Guide } from './../model/guide.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private snackBar: MatSnackBar) { }
  guides: Array<Guide>;

  initGuides(): void {
    this.guides = new Array<Guide>();

    this.addGuide("Appareils", "Appareils Description", "appareils.PNG");
    this.addGuide("Temperature", "Temperature Description", "temperature.PNG");
    this.addGuide("Poubelle", "Poubelle Description", "poubelle.PNG");

    this.addGuide("Direction", "Direction Description", "direction.PNG");
    this.addGuide("Parking", "Parking Description", "parking.PNG");
    this.addGuide("Arrivée", "Arrivée Description", "arrivee.PNG");
    // this.addGuide("Wi-Fi", "Wi-Fi Description", "wifi.PNG");
    // this.addGuide("Règles", "Règles Description", "regles.PNG");
    // this.addGuide("Départ", "Départ Description", "depart.PNG");

  }

  addGuide(title: string, description: string, imgDir: string): void {
    var newGuide: Guide = new Guide();
    newGuide.title = title;
    newGuide.description = "<p>" + description + "</p>";
    newGuide.imgDir = "assets/images/" + imgDir;

    this.guides.push(newGuide);
  }

  getGuides(): Array<Guide> {
    return this.guides;
  }

  deleteGuide(guide: Guide) {
    this.guides.forEach(
      g => {
        if (g.title === guide.title) {
          this.guides.splice(this.guides.indexOf(g), 1);

          this.snackBar.open('<' + guide.title + '> Deleted Successfully!');
        }
      }
    )
  }

  updateGuide(guide: Guide, updatedGuide: Guide): Guide {
    for (let i = 0; i < this.guides.length; i++) {
      if (this.guides[i].title === guide.title) {
        updatedGuide.imgDir = this.guides[i].imgDir;
        this.guides[i] = updatedGuide;

        this.snackBar.open('< ' + guide.title + '> has been updated to: <' + updatedGuide.title + '>');
        return this.guides[i];
      }
    }

  }
  isUnique(title: string, selectedGuide: Guide): boolean {
    for (let i = 0; i < this.guides.length; i++) {
      if (this.guides[i].title === title && this.guides.indexOf(selectedGuide) != i) {
        return false;
      }
    }
    return true;
  }

  isUnique2(title: string): boolean {
    for (let i = 0; i < this.guides.length; i++) {
      if (this.guides[i].title === title) {
        return false;
      }
    }
    return true;
  }

}

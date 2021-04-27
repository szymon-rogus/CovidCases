import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  darkMode: boolean;

  constructor() {
    this.darkMode = true;
  }

  changeMode = () => {
    this.darkMode = !this.darkMode;
  }

  getBackgroundColor = () => {
    return this.darkMode ? 'black' : 'white';
  }

  getTextColor = () => {
    return this.darkMode ? 'white' : 'black';
  }
}

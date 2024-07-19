import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourApp';
  isFav: boolean = false;
  public darkMode: boolean = false;
  
 myFunction() {
  var element = document.body;
  element.dataset['bsTheme'] = element.dataset['bsTheme'] =="light" ?  "dark" : "light";  
  }

  onClick(){
    this.isFav = !this.isFav
  }

  modeToggle(){
    this.darkMode = !this.darkMode
    document.documentElement.setAttribute('data-theme', this.darkMode ? "dark" : "light")
  }

}

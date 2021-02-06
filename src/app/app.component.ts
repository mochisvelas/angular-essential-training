import { Component } from '@angular/core';

//component decorator that adds metadata to the AppComponent class
@Component({
  selector: 'mw-app', //will select the first match in the index.html document
  templateUrl: './app.component.html', //the html of the component
  styleUrls: ['./app.component.css'] // the css of the component
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: null,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem){
  }
}

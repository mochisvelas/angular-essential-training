import { Component, Input, Output, EventEmitter } from '@angular/core';

//component decorator to add metadata to the MediaItemComponent class
@Component({
  selector: 'mw-media-item', //will match the element in the app.component.html, cuz MediaItemComponent is in the AppComponent
  templateUrl: './media-item.component.html', //html template to render in mw-media-item
  styleUrls: ['./media-item.component.css'] //css template to render in mw-media-item
})
export class MediaItemComponent {
  @Input() mediaItem; //input decorator to make mediaItem an input

  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-comp',
  templateUrl: './library-component.component.html'
})
export class LibraryComponent {
  @Input() opts; 
  @Output() onOptSelect = new EventEmitter();
  
  selectedOption;
  
  optionSelected() {
    this.onOptSelect.emit(this.selectedOption);
  }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{

  @Input()  inputText: String = 'f';
  @Output() outputValue: EventEmitter<String> = new EventEmitter<String>();

}

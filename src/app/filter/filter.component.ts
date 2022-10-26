/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 18/10/2022 - 18:36:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/10/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input('total') all: number = 0;
   @Input() free: number = 0;
   @Input() premium: number = 0;
   
   selectedRadioButtonValue: string = 'All';

   @Output()
   filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>(); 

   onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
   //  console.log(this.selectedRadioButtonValue,'79yugjgiigu')
   }
}
 
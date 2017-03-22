import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  myControl = new FormControl();
  options:string[] = [ "Test", "Hej", "California", "Blue"];
  filteredOptions: Observable<string[]>;
  

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
      return this.options.filter(option => new RegExp(val, 'gi').test(option)); 
   }

}

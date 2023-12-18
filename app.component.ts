import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #input type="text" (input)="textInput($event)" value="" />
    <hr />
    Upper-Case: {{ upperCase }}
    <br />
    Lower-Case: {{ lowerCase }}
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  upperCase: string = '';
  lowerCase: string = '';
  
  @ViewChild('input', { static: false }) inputBox!: ElementRef<HTMLInputElement>;

  textInput(event: Event) {
    this.upperCase = this.inputBox.nativeElement.value.toUpperCase();
    this.lowerCase = this.inputBox.nativeElement.value.toLowerCase();
  }

  ngAfterViewInit() {
    this.inputBox.nativeElement.focus();
  }
}

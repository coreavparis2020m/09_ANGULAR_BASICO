import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anyoActual: number;

  constructor() { }

  ngOnInit(): void {
    this.anyoActual = new Date().getFullYear();
    // console.log(this.anyoActual);
  }

}

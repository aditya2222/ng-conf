import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-for-paper',
  templateUrl: './call-for-paper.component.html',
  styleUrls: ['./call-for-paper.component.css']
})
export class CallForPaperComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

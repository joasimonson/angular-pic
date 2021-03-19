import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css'],
})
export class VMessageComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit() {}
}

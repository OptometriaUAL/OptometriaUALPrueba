import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent {

  @Input() fromPostlist?:string;

  constructor(){}

  ngOnInit():void {

  }
}
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation 
} from '@angular/animations';
import { bounce, flash, pulse,rubberBand} from 'ng-animate';
@Component({
  selector: 'app-anim-home',
  templateUrl: './anim-home.component.html',
  styleUrls: ['./anim-home.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateY(0%)' }),
        )
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('bounce', [transition('* => *', useAnimation(rubberBand))])
  ]
})
export class AnimHomeComponent implements OnInit {
  constructor() { }
  visible:boolean = false
  ngOnInit() {
    this.visible=true;
  }

}

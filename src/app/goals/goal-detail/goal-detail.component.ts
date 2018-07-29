import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GOAL } from '../../models/goal.model';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() passedGoal: GOAL;
  @Output() favoriteGoal: EventEmitter<GOAL> = new EventEmitter();
  @Output() deleteGoal: EventEmitter<GOAL> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('goals ', this.passedGoal);
  }


  favGoal() {
    if(this.passedGoal.favorite === false || this.passedGoal.favorite == null) {
      this.passedGoal.favorite = true;
    } else {
      this.passedGoal.favorite = false;
    }
    this.favoriteGoal.emit(this.passedGoal);
  }

  delGoal() {
    this.deleteGoal.emit(this.passedGoal);
  }

}

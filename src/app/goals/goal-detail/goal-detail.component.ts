import { Component, OnInit, Input } from '@angular/core';
import { GOAL } from '../../models/goal.model';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() passedGoal: GOAL;

  constructor() { }

  ngOnInit() {
  }

}

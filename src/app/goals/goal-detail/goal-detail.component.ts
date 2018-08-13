import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GOAL } from '../../models/goal.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GoalService} from '../../services/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  // @Input() goal: GOAL;
  // @Output() favoriteGoal: EventEmitter<GOAL> = new EventEmitter();
  // @Output() deleteGoal: EventEmitter<GOAL> = new EventEmitter();

  goal: GOAL;

  constructor(private router: ActivatedRoute,
     private goalService: GoalService,
    private redirect: Router) { }

  ngOnInit() {
    this.getGoal();
  }

  getGoal() {
    const id = this.router.snapshot.params['id'];

    this.goalService.getGoal(id).subscribe(
      goal => this.goal = goal
    )

  }

  favGoal(goal: GOAL) {
    if(this.goal.favorite === false || this.goal.favorite == null) {
      this.goal.favorite = true;
    } else {
      this.goal.favorite = false;
    }
    // this.favoriteGoal.emit(this.goal);
    this.updateGoal(goal);

  }

  updateGoal(goal: GOAL) {
    this.goalService.updateGoal(goal).subscribe(() => {
      console.log('goal updated')
    })
  }

  deleteGoal(goal: GOAL) {

    this.goalService.deleteGoal(goal).subscribe( () => {
      this.goBack();
    })
  }

  goBack() {
    this.redirect.navigate(['/home']);
  }


}

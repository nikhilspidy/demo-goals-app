import {Component, OnInit} from '@angular/core';
import {GOAL} from '../../models/goal.model';
import {GoalService} from '../../services/goal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  // @Input() passedGoal: GOAL;
  // @Output() favoriteGoal: EventEmitter<GOAL> = new EventEmitter();
  // @Output() deleteGoal: EventEmitter<GOAL> = new EventEmitter();


  passedGoal: GOAL;
  error: string;
  goals: GOAL[];

  constructor(private goalService: GoalService,
              public router: ActivatedRoute,
              public redirect: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getGoal();
    }, 1);
  }

  getGoal() {

    const id = this.router.snapshot.params['id'];

    this.goalService.getGoal(id)
      .subscribe(
        goal => this.passedGoal = goal,
        error => this.error = error);
  }


  favGoal(goal: GOAL) {
    if (goal.favorite === false || goal.favorite == null) {
      goal.favorite = true;
    } else {
      goal.favorite = false;
    }
    // this.goalService.updateGoal(this.passedGoal);

    this.updateGoal(goal);
  }


  updateGoal(event): void {
    console.log('up ', event);
    this.goalService.updateGoal(event)
      .subscribe(() => {
        console.log(event, ' updated');
      });
  }

  delGoal(event): void {
    console.log('event ', event);
    // this.goals = this.goals.filter(g => g !== event);
    this.goalService.deleteGoal(event).subscribe(() => {
      this.goBack();
    });
  }

  goBack(): void {
    this.redirect.navigate(['/home']);
  }


  // favGoal() {
  //   if(this.passedGoal.favorite === false || this.passedGoal.favorite == null) {
  //     this.passedGoal.favorite = true;
  //   } else {
  //     this.passedGoal.favorite = false;
  //   }
  //   this.favoriteGoal.emit(this.passedGoal);
  // }
  //
  // delGoal() {
  //   this.deleteGoal.emit(this.passedGoal);
  // }

}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GOAL} from '../models/goal.model';
import {GoalService} from '../services/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})

export class GoalsComponent implements OnInit {
  title = 'My Goals App';
  // goals = ['Great angular dev', ' financially free', 'time freedom'];
  goals: GOAL[] = [];
  name: string;
  date: Date;
  selectedGoal: GOAL;
  error: string;

  constructor(private goalService: GoalService) {
  }

  ngOnInit() {
    // this.goals = this.goalService.getGoals();

    this.getGoals();

  }

  getGoals() {
    this.goalService.getGoals().subscribe(
      goals => this.goals = goals,
      error => this.error = error
    );
  }

  addGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    // this.goalService.addGoal(goal);

    this.goals.push(goal);

    this.goalService.addGoal(goal)
      .subscribe(goal => {
        console.log('added');
      });

    setTimeout(() => {
      this.getGoals();
    }, 10);

  }

  onSelect(goal: GOAL) {
    this.selectedGoal = goal;
  }

  updateGoal(event): void {
    this.goalService.updateGoal(event)
      .subscribe(() => this.goBack());
  }

  deletedGoal(event) {

    this.goals = this.goals.filter(g => g !== event);
    this.goalService.deleteGoal(event).subscribe();
  }

  goBack(): void {
    // this.location.back();
  }
}

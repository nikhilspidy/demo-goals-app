import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GOAL} from '../models/goal.model';
import { GoalService } from '../services/goal.service';

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
  message: string;

  constructor(private goalService: GoalService){}

  ngOnInit(){
    // this.goals = this.goalService.getGoals();
    this.getGoals();
  }

  getGoals() {
    this.goalService.getGoals().subscribe(
      goals => this.goals = goals,
      error => this.error = error;
    )
  }

  addGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    // this.goalService.addGoal(goal);

    this.goalService.addGoal(goal).subscribe(
        message => this.message = message;
    )

    setTimeout( () => {
      this.getGoals();
    }, 50)
  }

  onSelect(goal: GOAL){
    this.selectedGoal = goal;
  }


}

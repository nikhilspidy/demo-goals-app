import {Component} from '@angular/core';
import {GOAL} from '../models/goal.model';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})

export class GoalsComponent {
  title = 'My Goals App';
  // goals = ['Great angular dev', ' financially free', 'time freedom'];
  goals: GOAL[] = [];
  name: string;
  date: Date;
  selectedGoal: GOAL;

  constructor(private goalService: GoalService){}

  ngOnInit(){
    // this.goals = this.goalService.getGoals();

    this.getGoals();
  }

  getGoals() {
    this.goalService.getGoals().subscribe(
      goals => this.goals = goals
    )
  }

  addGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    this.goalService.addGoal(goal).subscribe(() =>{
      this.goals.push(goal)
    })
  }

  onSelect(goal: GOAL){
    this.selectedGoal = goal;
  }

  
}

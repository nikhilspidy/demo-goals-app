import {Component} from '@angular/core';
import {GOAL} from '../models/goal.model';

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

  onAddGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    this.goals.push(goal);
  }

  onSelect(goal: GOAL){
    this.selectedGoal = goal;

  }
}

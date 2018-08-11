import {Injectable} from '@angular/core';
import {GOAL} from '../models/goal.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  // goals: GOAL[] = [
  //   {
  //     name: '5km run',
  //     date: new Date('2018-10-24')
  //   },
  //   {
  //     name: '10km run',
  //     date: new Date('2019-02-02')
  //   }
  // ];

  const url = 'https://so-goals-api.herokuapp.com/api/goals';
  const urlOne = 'https://so-goals-api.herokuapp.com/api/goal';

  constructor(private http: HttpClient) {}

  getGoals(): Observable<GOAL[]>{
    // return this.goals;
    return this.http.get<GOAL[]>(this.url);
  }

  getGoal(id: string): Observable<any>{
    const newUrl = this.urlOne + '/' + id;
    return this.http.get<GOAL>(newUrl);
  }

  getGoal(id: number): Observable<any>{
    return this.http.get<GOAL>(this.urlOne + '/' + id);
  }

  addGoal(goal): Observable<GOAL> {
    // this.goals.push(goal);
    return this.http.post<GOAL>(this.urlOne, goal);
  }

  updateGoal(goal): Observable<any> {
    return this.http.put(this.urlOne, goal);
  }

  deleteGoal(goal): Observable<any> {
    const newUrl = this.urlOne + '/' + goal._id;
    return this.http.delete(newUrl, httpOptions);
  }

  // updateGoal(goal) {
  //   this.goals.forEach( (goal, i) => {
  //     if (goal === goal){
  //       this.goals[i] = goal;
  //     }
  //
  //   })
  // }

  // deleteGoal(event) {
  //   if (this.goals.includes(event)) {
  //     this.goals.forEach( (goal, i) => {
  //       if(goal === event) {
  //         this.goals.splice(i, 1);
  //       }
  //     } )
  //   }
  // }

}

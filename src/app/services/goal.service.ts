import {Injectable} from '@angular/core';
import {GOAL} from '../models/goal.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  // goals: GOAL[] = [
  //   {
  //     name: '5km run',
  //     date: '07-26-18'
  //   },
  //   {
  //     name: '10km run',
  //     date: '08-13-18'
  //   }
  // ];


  private uri = 'https://so-goals-api.herokuapp.com/api/goals';
  private uriOne = 'https://so-goals-api.herokuapp.com/api/goal';
  private uriLocal = 'http://localhost:8010/api/goals';
  private uriLocalOne = 'http://localhost:8010/api/goal';

  constructor(private http: HttpClient) {
  }


  // getGoals(){
  //   return this.goals;
  // }

  getGoals(): Observable<GOAL[]> {
    return this.http.get<GOAL[]>(this.uri);
  }

  updateGoal (goal: GOAL): Observable<any> {
    return this.http.put(this.uriOne, goal, httpOptions).pipe(
      tap(_ => this.log(`updated goal=${goal.name}`)),
      catchError(this.handleError<any>('updateGoal'))
    );
  }

  deleteGoal(goal: GOAL | number) {

    const id = typeof goal === 'number' ? goal : goal._id;
    const url = `${this.uriOne}/${id}`;

    return this.http.delete<GOAL>(url, httpOptions2).pipe(
      tap((goaly: GOAL) => this.log(`goal deleted=${goaly.name}`)),
      catchError(this.handleError('deleteGoal', goal))
    );
  }

  addGoal(goal: GOAL): Observable<GOAL> {

    return this.http.post<GOAL>(this.uriOne, goal, httpOptions).pipe(
      tap((goaly: GOAL) => this.log(`added goal w/ name=${goaly.name}`)),
      catchError(this.handleError('addGoal', goal))
    );

    // {name: 'sam', date: Date.now(), id: 3, favorite: true}
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`goalService: ${message}`);
  }

  // addGoal(goal) {
  //   this.goals.push(goal);
  // }
  //
  // updateGoal(goal) {
  //   this.goals.forEach( (goal, i) {
  //     if goal === event
  //     this.goals[i] = event;
  //   })
  // }
  //
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

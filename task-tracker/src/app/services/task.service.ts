import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mork-task';
import { Task } from 'src/app/Task';
import { Observable, observable,of } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(){ }
  getTasks(): Observable<Task[]> {
    const tasks=of(TASKS);
    return tasks;
  }
}

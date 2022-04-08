import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import {TaskQuery} from "./task.query";

export const GETS_ALL_TASKS_QUERY = new InjectionToken<GetsAllTasksQueryPort>('GETS_ALL_TASKS_QUERY');

export interface GetsAllTasksQueryPort {
    getAllTasksQuery(): Observable<TaskQuery[]>;
}

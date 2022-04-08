import { NgModule } from '@angular/core';
import {TodoAppState} from "./todo-app.state";
import {ADDS_TASK_COMMAND} from "../ports/primary/adds-task.command-port";
import {GETS_ALL_TASKS_QUERY} from "../ports/primary/gets-all-tasks.query-port";
import {REMOVES_TASK_COMMAND} from "../ports/primary/removes-task.command-port";
import {CHANGES_TASK_STATUS_COMMAND} from "../ports/primary/changes-task-status.command-port";

@NgModule({
    providers: [
        TodoAppState,
        { provide: ADDS_TASK_COMMAND, useExisting: TodoAppState },
        { provide: REMOVES_TASK_COMMAND, useExisting: TodoAppState },
        { provide: CHANGES_TASK_STATUS_COMMAND, useExisting: TodoAppState },
        { provide: GETS_ALL_TASKS_QUERY, useExisting: TodoAppState },
    ],
})
export class TodoAppStateModule {}

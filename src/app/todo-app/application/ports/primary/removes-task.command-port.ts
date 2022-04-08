import {InjectionToken} from "@angular/core";
import {RemovesTaskCommand} from "./removes-task.command";

export const REMOVES_TASK_COMMAND = new InjectionToken<RemovesTaskCommandPort>(
    'REMOVES_TASK_COMMAND',
);

export interface RemovesTaskCommandPort {
    removeTask(command: RemovesTaskCommand): void;
}

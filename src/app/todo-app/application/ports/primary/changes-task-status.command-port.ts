import {InjectionToken} from "@angular/core";
import {ChangesTaskStatusCommand} from "./changes-task-status.command";

export const CHANGES_TASK_STATUS_COMMAND = new InjectionToken<ChangesTaskStatusCommandPort>(
    'CHANGES_TASK_STATUS_COMMAND',
);

export interface ChangesTaskStatusCommandPort {
    changeTaskStatus(command: ChangesTaskStatusCommand): void;
}

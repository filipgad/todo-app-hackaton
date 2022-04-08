import {InjectionToken} from "@angular/core";
import {AddsTaskCommand} from "./adds-task.command";

export const ADDS_TASK_COMMAND = new InjectionToken<AddsTaskCommandPort>(
    'ADDS_TASK_COMMAND',
);

export interface AddsTaskCommandPort {
    addTask(command: AddsTaskCommand): void;
}

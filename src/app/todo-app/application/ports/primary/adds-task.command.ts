import {TaskEntity} from "../secondary/task.entity";
import {TaskDTO} from "../secondary/task.dto";

export class AddsTaskCommand {
    readonly task: TaskDTO;

    constructor(private _value: string) {
        this.task = new TaskEntity(_value);
    }
}

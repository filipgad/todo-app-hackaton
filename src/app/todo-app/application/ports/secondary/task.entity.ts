import { v4 as uuid } from 'uuid';
import {TaskDTO} from "./task.dto";

export class TaskEntity implements TaskDTO {
    constructor(readonly value: string, readonly isDone: boolean = false, readonly id: string = uuid()) {}
}

import {Inject, Injectable} from '@angular/core';
import {ADDS_TASK_COMMAND, AddsTaskCommandPort} from "../ports/primary/adds-task.command-port";
import {AddsTaskCommand} from "../ports/primary/adds-task.command";
import {TASK_STORAGE} from "../../task.storage";
import {InMemoryStorage} from "../../../storage/in-memory/in-memory.storage";
import {TaskDTO} from "../ports/secondary/task.dto";
import {map, Observable} from "rxjs";
import {GetsAllTasksQueryPort} from "../ports/primary/gets-all-tasks.query-port";
import {TaskQuery} from "../ports/primary/task.query";
import {RemovesTaskCommandPort} from "../ports/primary/removes-task.command-port";
import {RemovesTaskCommand} from "../ports/primary/removes-task.command";
import {ChangesTaskStatusCommandPort} from "../ports/primary/changes-task-status.command-port";
import {ChangesTaskStatusCommand} from "../ports/primary/changes-task-status.command";
import {ADDS_TASK_DTO, AddsTaskDtoPort} from "../ports/secondary/adds-task.dto-port";

@Injectable()
export class TodoAppState implements GetsAllTasksQueryPort, AddsTaskCommandPort, RemovesTaskCommandPort, ChangesTaskStatusCommandPort {

    constructor(
        @Inject(TASK_STORAGE) private _taskStorage: InMemoryStorage<TaskDTO>,
        @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort
    ) {}

    addTask(command: AddsTaskCommand) {
        this._addsTaskDto.add(command.value).subscribe(task => {
            this._taskStorage.save(task.id, task);
        });
    }

    removeTask(command: RemovesTaskCommand) {
        this._taskStorage.remove(command.id);
    }

    changeTaskStatus(command: ChangesTaskStatusCommand) {
        const task = this._taskStorage.get(command.id);

        task && this._taskStorage.save(command.id, {...task, completed: !task.completed});
    }

    getAllTasksQuery(): Observable<TaskQuery[]> {
        return this._taskStorage.getAll().pipe(map(tasks => tasks.map(taskDTO => TaskQuery.fromTaskDTO(taskDTO))));
    }
}

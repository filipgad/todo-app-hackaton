import {Component, Inject} from '@angular/core';
import {
  GETS_ALL_TASKS_QUERY,
  GetsAllTasksQueryPort
} from "../../../../application/ports/primary/gets-all-tasks.query-port";
import {Observable, tap} from "rxjs";
import {TaskQuery} from "../../../../application/ports/primary/task.query";
import {
  REMOVES_TASK_COMMAND,
  RemovesTaskCommandPort
} from "../../../../application/ports/primary/removes-task.command-port";
import {RemovesTaskCommand} from "../../../../application/ports/primary/removes-task.command";
import {
  CHANGES_TASK_STATUS_COMMAND,
  ChangesTaskStatusCommandPort
} from "../../../../application/ports/primary/changes-task-status.command-port";
import {ChangesTaskStatusCommand} from "../../../../application/ports/primary/changes-task-status.command";
import {ShowsRemoveTaskConfirmationModalCommand} from "../../../../application/ports/primary/shows-remove-task-confirmation-modal.command";
import {
  SHOWS_REMOVE_TASK_CONFIRMATION_MODAL_COMMAND,
  ShowsRemoveTaskConfirmationModalCommandPort
} from "../../../../application/ports/primary/shows-remove-task-confirmation-modal.command-port";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  readonly tasks$: Observable<TaskQuery[]> = this._getsAllTasksQuery$.getAllTasksQuery();

  constructor(
      @Inject(GETS_ALL_TASKS_QUERY) private _getsAllTasksQuery$: GetsAllTasksQueryPort,
      @Inject(SHOWS_REMOVE_TASK_CONFIRMATION_MODAL_COMMAND) private _showsRemoveTaskConfirmationModalCommand: ShowsRemoveTaskConfirmationModalCommandPort,
      @Inject(CHANGES_TASK_STATUS_COMMAND) private _completesTaskCommand: ChangesTaskStatusCommandPort
  ) {}

  onDeleteClicked(taskId: string): void {
    this._showsRemoveTaskConfirmationModalCommand.showRemoveTaskConfirmationModal(new ShowsRemoveTaskConfirmationModalCommand(taskId));
  }

  onCheckboxClicked(taskId: string): void {
    this._completesTaskCommand.changeTaskStatus(new ChangesTaskStatusCommand(taskId));
  }
}

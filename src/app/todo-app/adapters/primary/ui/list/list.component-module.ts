import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {FormComponentModule} from "../form/form.component-module";
import {SHOWS_REMOVE_TASK_CONFIRMATION_MODAL_COMMAND} from "../../../../application/ports/primary/shows-remove-task-confirmation-modal.command-port";
import {RemoveTaskConfirmationModalComponent} from "./remove-task-confirmation-modal/remove-task-confirmation-modal.component";
import {ShowsRemoveTaskConfirmationModalCommand} from "../../../../application/ports/primary/shows-remove-task-confirmation-modal.command";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ListComponent,
    RemoveTaskConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    FormComponentModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: SHOWS_REMOVE_TASK_CONFIRMATION_MODAL_COMMAND,
      useFactory: (dialog: MatDialog) => {
        return {
          showRemoveTaskConfirmationModal: (command: ShowsRemoveTaskConfirmationModalCommand) =>
            dialog.open(RemoveTaskConfirmationModalComponent, {
              data: {taskId: command.id},
            })
        };
      },
      deps: [MatDialog],
    },
  ],
})
export class ListComponentModule { }

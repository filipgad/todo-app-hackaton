import { NgModule } from '@angular/core';
import {HttpSyncTask} from "./http-sync-task.service";
import {ADDS_TASK_DTO} from "../../../application/ports/secondary/adds-task.dto-port";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        HttpSyncTask,
        { provide: ADDS_TASK_DTO, useExisting: HttpSyncTask },
    ],
})
export class HttpSyncTaskServiceModule {}

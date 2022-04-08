import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponentModule} from "./adapters/primary/ui/list/list.component-module";
import {HomeComponentModule} from "./adapters/primary/ui/home/home.component-module";
import {TodoAppStateModule} from "./application/state/todo-app.state-module";
import {TASK_STORAGE} from "./task.storage";
import {InMemoryStorage} from "../storage/in-memory/in-memory.storage";
import {HttpSyncTaskServiceModule} from "./adapters/secondary/infrastructure/http-sync-task.service-module";
import {TODOIST_API_TOKEN} from "./todoist-api-token";
import {environment} from "../../environments/environment";
import {API_URL} from "./api-url";

@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        HttpSyncTaskServiceModule,
        TodoAppStateModule,
        ListComponentModule,
        HomeComponentModule,
    ],
  providers: [
    {provide: TASK_STORAGE, useFactory: () => new InMemoryStorage<Task>()},
    {provide: TODOIST_API_TOKEN, useValue: environment.todoistToken},
    {provide: API_URL, useValue: environment.todoistApiUrl}
  ]
})
export class TodoAppModule { }

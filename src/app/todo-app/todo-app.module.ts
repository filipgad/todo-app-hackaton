import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponentModule} from "./adapters/primary/ui/list/list.component-module";
import {HomeComponentModule} from "./adapters/primary/ui/home/home.component-module";
import {TodoAppStateModule} from "./application/state/todo-app.state-module";
import {TASK_STORAGE} from "./task.storage";
import {InMemoryStorage} from "../storage/in-memory/in-memory.storage";

@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        TodoAppStateModule,
        ListComponentModule,
        HomeComponentModule,
    ],
  providers: [
    {provide: TASK_STORAGE, useFactory: () => new InMemoryStorage<Task>()}
  ]
})
export class TodoAppModule { }

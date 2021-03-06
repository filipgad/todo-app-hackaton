import {Inject, Injectable} from "@angular/core";
import {AddsTaskDtoPort} from "../../../application/ports/secondary/adds-task.dto-port";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TODOIST_API_TOKEN} from "../../../todoist-api-token";
import {TaskDTO} from "../../../application/ports/secondary/task.dto";
import {API_URL} from "../../../api-url";

@Injectable()
export class HttpSyncTask implements AddsTaskDtoPort {
    constructor(
        private _httpClient: HttpClient,
        @Inject(TODOIST_API_TOKEN) private _todoIstApiToken: string,
        @Inject(API_URL) private _apiUrl: string
    ) {}

    add(content: string): Observable<TaskDTO> {
        const body = {content};
        const options = {
            headers: new HttpHeaders().set('Authorization', `Bearer ${this._todoIstApiToken}`)
        };

        return this._httpClient
            .post<{id: string; content: string; completed: boolean}>(this._apiUrl, body, options)
            .pipe(map(response => ({id: response.id, value: response.content, completed: response.completed })));
    }

}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { createCommonHeaders } from './../../utils/httpHeaderUtils';
import { ProjectsDetails } from "../../../shared/model/user-projects-details";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) { }

  loadProjectsDetails(userId): Observable<ProjectsDetails> {
    return <Observable<ProjectsDetails>>this.http.get('/api/projects', { headers: createCommonHeaders(userId)})
  }
}
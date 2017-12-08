import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { createCommonHeaders } from './../../utils/httpHeaderUtils';
import { ProjectsDetails } from "../../../shared/model/user-projects-details";

@Injectable()
export class ProjectsService {
  constructor(private http: Http) { }

  loadProjectsDetails(userId): Observable<ProjectsDetails> {
    return this.http.get('/api/projects', { headers: createCommonHeaders(userId)})
      .map(res => res.json());
  }
}
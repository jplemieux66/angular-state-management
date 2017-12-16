import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Moment } from "moment";
import { createCommonHeaders, addJsonContentTypeHeader } from "../../utils/httpHeaderUtils";
import { Observable } from "rxjs/Observable";
import { TimeEntry } from "../../../shared/model/time-entry";

@Injectable()
export class TimeEntriesService {
  constructor(private http: HttpClient) { }

  addTimeEntry(date: Moment, projectId: number, userId: number, time: number): Observable<TimeEntry> {
    const body = {
      date,
      projectId,
      time
    }
    return <Observable<TimeEntry>>this.http.post('/api/time-entry', body, { headers: createCommonHeaders(userId) })
  }

  updateTimeEntry(timeEntryId: number, newTime: number): Observable<TimeEntry> {
    const body = { newTime };
    return <Observable<TimeEntry>>this.http.patch(`/api/time-entry/${timeEntryId}`, body, { headers: addJsonContentTypeHeader() })
  }

  deleteTimeEntry(timeEntryId: number): Observable<TimeEntry> {
    return <Observable<TimeEntry>>this.http.delete(`/api/time-entry/${timeEntryId}`)
  }
}
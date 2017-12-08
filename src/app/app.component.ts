import { Component } from '@angular/core';
import { WeekInfo } from './dates/week-info.model';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';
import { ChangeSelectedWeek } from './actions/date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedWeekInfo$: Observable<WeekInfo>;

  constructor(private store: Store<fromRoot.State>) {
    this.selectedWeekInfo$ = this.store.select(fromRoot.getSelectedWeekInfo);
  }

  weekSelectedChanged(selectedWeekInfo: WeekInfo) {
    this.store.dispatch(new ChangeSelectedWeek(selectedWeekInfo));
  }
}

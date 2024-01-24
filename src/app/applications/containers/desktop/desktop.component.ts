import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, filter, mergeMap, takeUntil } from 'rxjs';
import { DESKTOP } from 'src/app/shared/config/applications';
import { WindowService } from 'src/app/shared/services/window.service';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject();

  launchpadOpened = false;

  constructor(
    private windowService: WindowService,
    private store: Store) {

  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete()
  }

  ngOnInit() {
    this.store.activeApplication$
      .pipe(
        takeUntil(this.onDestroy$),
        filter(app => app !== DESKTOP),
        mergeMap(app => this.windowService.open(app))
      )
      .subscribe(_ => this.store.setActiveApplication())

  }

}

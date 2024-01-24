import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from "primeng/tooltip";
import { LOUNCHPAD } from 'src/app/shared/config/applications';
import { dockItems } from 'src/app/shared/config/dock-items';
import { Store } from 'src/app/shared/store/store';


@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class DockComponent implements OnInit {

  @Output() launchpadOpened = new EventEmitter();

  dockItems: MenuItem[] = [];

  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000
  };

  constructor(private store: Store){}

  ngOnInit() {
    this.dockItems = this.getDockItems();
  }

  getDockItems(){
    return dockItems.map(dockItem => {
      return {
        label: dockItem,
        icon: dockItem,
        tootipOptions: {
          tootipLabel: dockItem,
          ...this.defaultTooltipOptions
          },
          command: () => {
            if (dockItem === LOUNCHPAD ) {
              this.launchpadOpened.emit();
            }

            this.store.setActiveApplication(dockItem);
          }
        };
    })
  };

}

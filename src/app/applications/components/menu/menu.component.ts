import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

menuItems = [
  {
    label: 'Finder',
    className: 'menubar-root'
  },
  {
    label: 'File'
  },
  {
    label: 'Edit'
  },
  {
    label: 'View'
  },
  {
    label: 'Go'
  },
  {
    label: 'Window'
  },
  {
    label: 'Help'
  },
];

constructor(){}

ngOnInit() {

}

}

import { Injectable } from '@angular/core';
import { BaseStore } from './base-store';
import { State } from './state';
import { DESKTOP } from '../config/applications';
import { Observable } from 'rxjs';

const initialState: State = {
  activeApplication: DESKTOP,
  selectedFoldersIds: [],
  deletedFoldersIds: [],
  folders: []
};

@Injectable({providedIn: 'root'})
export class Store extends BaseStore{

  activeApplication$: Observable<string> = this.select((state) => {
    return state.activeApplication;
  })

  constructor() {
    super(initialState);
   }

   setActiveApplication(activeAppId = DESKTOP) {
    this. setState({
      activeApplication: activeAppId
    })
   }

}

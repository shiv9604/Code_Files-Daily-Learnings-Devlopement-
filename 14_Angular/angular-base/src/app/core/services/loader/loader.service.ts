import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { showLoader } from 'src/app/shared/loader/Store/loader.actions';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private store: Store) {}

  showLoader() {
    return this.store.dispatch(showLoader({ status: true }));
  }

  stopLoader() {
    return this.store.dispatch(showLoader({ status: false }));
  }
}

import {Injectable} from '@angular/core';

const prefix: string = 'my-test-app';

@Injectable()
export class LocalStorageService {
  private prefix: string = prefix;
  private $localStorage: Storage = localStorage;

  constructor() {
  }

  setItem(key: string, data: any) {
    this.$localStorage.setItem(this.updateKey(key), data);
  }

  getItem(key: string) {
    return this.$localStorage.getItem(this.updateKey(key));
  }

  private updateKey(key: string) {
    return `${this.prefix}-${key}`;
  }
}



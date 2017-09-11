import {Injectable} from '@angular/core';

const prefix: string = 'my-test-app';

@Injectable()
export class LocalStorageService {
  private prefix: string = prefix;
  private $localStorage: Storage = localStorage;

  constructor() {
  }

  public setItem(key: string, data: any): void {
    this.$localStorage.setItem(this.updateKey(key), data);
  }

  public getItem(key: string): string {
    return this.$localStorage.getItem(this.updateKey(key));
  }

  private updateKey(key: string) {
    return `${this.prefix}-${key}`;
  }
}



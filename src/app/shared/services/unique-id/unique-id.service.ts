import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGeneratedIds: number = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueWithPrefix(prefix: string): string {
    if(!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty')
    }

    const uniqueId = this.gerenateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private gerenateUniqueId(): string {
    return uuidv4();
  }
}

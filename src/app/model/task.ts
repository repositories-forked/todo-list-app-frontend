import {Priority} from '../util/priority.enum';
import {Status} from '../util/status.enum';

export class Task {
  constructor(public id: number|null,
              public text: string,
              public priority: Priority,
              public status: Status,
              public username: string) {
  }
}

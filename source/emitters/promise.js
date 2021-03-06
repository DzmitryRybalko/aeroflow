'use strict';

import { toError } from '../utilites';
import { unsync } from '../unsync';

export function promiseEmitter(source) {
  return (next, done, context) => source.then(
    result => {
      if (!unsync(next(result), done, done))
        done(true);
    },
    result => done(toError(result)));
}

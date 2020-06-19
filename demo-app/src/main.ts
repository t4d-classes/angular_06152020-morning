import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable, Subscriber } from 'rxjs';
// import { map, filter, take } from 'rxjs/operators';

// console.log('Observable Demo');

// let subscriptionCount = 0;

// type NumCounter = {
//   id: number;
//   c: number;
// };

// const nums$ = new Observable( (subscriber: Subscriber<NumCounter>) => {

//   let counter = 0;

//   const subscriberId = subscriptionCount++;

//   const fn = () => {

//     if (subscriber.closed) {
//       clearInterval(handle);
//       console.log('stopping new values');
//       return;
//     }

//     console.log('generating a new value');
//     subscriber.next({ id: subscriberId, c: counter++ });
//   };

//   console.dir(fn);

//   const handle = setInterval(fn, 500);

// });

// const fns = [
//   filter((num: NumCounter) => num.c % 2 === 0),
//   map((num: NumCounter) => num.c * 2),
//   take(3),
// ];

// const numSubscription = nums$
//   .pipe(
//     ...fns as [],
//   )
//   .subscribe(c => console.log(c));

// // setTimeout(() => {

// //   console.log('unsubscribing');
// //   numSubscription.unsubscribe();

// // }, 4000);


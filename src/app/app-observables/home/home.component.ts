import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeObsComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    //creating custom observable
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        // emits next vupdate value
        observer.next(count);
        if (count === 5) {

          // emits or close the subscription
          observer.complete();
        }
        if (count > 3) {

          // emits error
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });

   // subscribing observable
    this.firstObsSubscription = customIntervalObservable

    // using pipe to add some operators
    .pipe(
      // first does filter
      filter(data => {
      return data > 0;
    }),
    // get data after filter
     map((data: number) => {
      return 'Round: ' + (data + 1);
    }))
    // gets data after pipe oprerators
    .subscribe(data => {
      console.log(data);
    }, 

     // run if error occur
    error => {
      console.log(error);
      alert(error.message);
    },

    // run after completion of subscription
    () => {
      console.log('Completed!');
    });
  }

  //destroy  creatd subscription
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}

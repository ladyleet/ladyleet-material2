import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Scheduler } from 'rxjs';
@Component({
  selector: 'app-konami',
  template: `
    <div style="position: absolute; top: 0; left: 0; z-index:100">
      <img *ngIf="showBroccoli" src="/assets/broccoli.png"/>
    </div>
  `,
  styles: []
})
export class KonamiComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  showBroccoli: boolean = false;

  constructor() { }

  static code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft',
    'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

  ngOnInit() {
    this.subscription = Observable.fromEvent(document, "keyup")
      .map((e:any) => e.code)
      .bufferCount(KonamiComponent.code.length, 1)
      .switchMap(buffer => Observable.from(buffer)
        .sequenceEqual(Observable.from(KonamiComponent.code)))
      .filter(x => x)
      .do(() => this.showBroccoli = true)
      .subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

  @Input() public description: string = '';
  @Input() public src: string = '';
  @Input() public likes: number = 0;
  @Output() public liked: EventEmitter<void> = new EventEmitter();
  private debounceSubject: Subject<void> = new Subject();
  private unSubscribe: Subject<void> = new Subject();

  constructor() { }

  public ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(() => this.liked.emit());
  }

  public ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  public like(): void {
    this.debounceSubject.next();
  }
}

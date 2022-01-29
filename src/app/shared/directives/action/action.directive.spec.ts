import { ActionModule } from './action.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { cpuUsage } from 'process';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {

  let fixture: ComponentFixture<ActionDirectiveTestComponent> = null;
  let component: ActionDirectiveTestComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[ActionDirectiveTestComponent],
      imports: [ActionModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(D) (@Output appAction) should emit event with payload when ENTER key is pressed', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event: KeyboardEvent = new KeyboardEvent('keyup', { key: 'enter'});
    divElement.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction) should emit event with payload when clicked', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    divElement.click();
    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction) should emit event with payload when clicked or ENTER key pressed', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');

    const eventKeyBoard: KeyboardEvent = new KeyboardEvent('keyup', { key: 'enter'});
    const eventClick: Event = new Event('click');

    divElement.dispatchEvent(eventClick);
    expect(component.hasEvent()).withContext('Click event').toBeTrue();

    component.clearEvent();

    divElement.dispatchEvent(eventKeyBoard);
    expect(component.hasEvent()).withContext('KeyBoard event "keyup"').toBeTrue();
  });
});


@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {

  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

  public clearEvent(): void {
    this.event = null
  }
}

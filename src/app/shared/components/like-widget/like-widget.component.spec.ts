import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe('LikeWidgetComponent', () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('should NOT auto-generate during ngOnInit when (@Input id) is assigned', () => {
    const testId = "testId";
    component.id = testId;
    fixture.detectChanges();
    expect(component.id).toBe(testId);
  });

  // ----- Testes OutPut -----

  // USING SPY (Modo mais "elegante", com menos linhas)
  it(`#${LikeWidgetComponent.prototype.like}
    should trigger emission when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

  // USING 'DONE' (Modo mais "rude", que consome mais linhas)
  // it(`#${LikeWidgetComponent.prototype.like}
  //   should trigger emission when called`, done => {
  //   fixture.detectChanges();
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });
  //   component.like();
  // });
});

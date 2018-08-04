
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LandingNavComponent } from './landing-nav.component';

describe('LandingNavComponent', () => {
  let component: LandingNavComponent;
  let fixture: ComponentFixture<LandingNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LandingNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

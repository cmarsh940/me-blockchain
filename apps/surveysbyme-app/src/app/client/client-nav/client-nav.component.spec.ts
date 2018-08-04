
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClientNavComponent } from './client-nav.component';

describe('ClientNavComponent', () => {
  let component: ClientNavComponent;
  let fixture: ComponentFixture<ClientNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ClientNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

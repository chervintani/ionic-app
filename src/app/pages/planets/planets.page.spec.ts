import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanetsPage } from './planets.page';

describe('PlanetsPage', () => {
  let component: PlanetsPage;
  let fixture: ComponentFixture<PlanetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

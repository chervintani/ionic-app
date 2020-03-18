import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmsPage } from './films.page';

describe('FilmsPage', () => {
  let component: FilmsPage;
  let fixture: ComponentFixture<FilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

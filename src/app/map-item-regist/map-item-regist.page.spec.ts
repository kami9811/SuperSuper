import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapItemRegistPage } from './map-item-regist.page';

describe('MapItemRegistPage', () => {
  let component: MapItemRegistPage;
  let fixture: ComponentFixture<MapItemRegistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapItemRegistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapItemRegistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

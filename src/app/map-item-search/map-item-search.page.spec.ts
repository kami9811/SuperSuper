import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapItemSearchPage } from './map-item-search.page';

describe('MapItemSearchPage', () => {
  let component: MapItemSearchPage;
  let fixture: ComponentFixture<MapItemSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapItemSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapItemSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

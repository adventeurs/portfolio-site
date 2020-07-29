import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EvansgrayComponent } from "./evansgray.component";

describe("EvansgrayComponent", () => {
  let component: EvansgrayComponent;
  let fixture: ComponentFixture<EvansgrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvansgrayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvansgrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

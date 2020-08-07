import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEvansgrayComponent } from './project-evansgray.component';

describe('ProjectEvansgrayComponent', () => {
  let component: ProjectEvansgrayComponent;
  let fixture: ComponentFixture<ProjectEvansgrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEvansgrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEvansgrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

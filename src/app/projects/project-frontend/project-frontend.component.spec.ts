import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFrontendComponent } from './project-frontend.component';

describe('ProjectFrontendComponent', () => {
  let component: ProjectFrontendComponent;
  let fixture: ComponentFixture<ProjectFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

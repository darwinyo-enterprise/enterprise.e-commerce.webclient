import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuContainer } from './admin-menu.container';
import { SharedModule } from '../../../shared/shared.module';
import { AdminMenuContainerSetup } from '../../testing/setups/containers/admin-menu-container.setup.spec';
import { adminNavigationMenu } from '../../../shared/mock-data/admin-navigation-menu';
import { RouterModule } from '@angular/router';

describe('[ADMIN] [CONTAINER] ADMIN-MENU-CONTAINER', () => {
  let component: AdminMenuContainer;
  let fixture: ComponentFixture<AdminMenuContainer>;
  /** Contains All Spies, Element Selectors... */
  let adminMenuContainerSetup: AdminMenuContainerSetup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMenuContainer],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuContainer);
    component = fixture.componentInstance;

    /** Initialize Setup Container */
    adminMenuContainerSetup = new AdminMenuContainerSetup(fixture, component);

    fixture.detectChanges();
  });

  /** Test Cases :
   *  - Make sure to populate this adminMenu with mocks to test func
   *  - Test When Anchor clicked router redirect with write url
   *  - make sure title display correctly
   */
  it('should Populate All Menu Models Correctly', () => {
    /** Anchors Not To Be Null */
    expect(adminMenuContainerSetup.anchorsCollectionEl).not.toBeNull();

    adminMenuContainerSetup.go_to_nthAnchor_Child(1);
    /** Assert Populated Correctly */
    expect(adminMenuContainerSetup.iconEl.nodeValue).toEqual(adminNavigationMenu[0].menuIcon);
  });
});

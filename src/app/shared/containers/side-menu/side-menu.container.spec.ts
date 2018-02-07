import { SideMenuContainer } from './side-menu.container';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideMenuContainerSetup } from '../../testing/setup/containers/side-menu-container.setup.spec';
import { ThirdPartyModule } from '../../../third-party/third-party.module';
import { Router } from '@angular/router';
import { StoreModule, combineReducers } from '@ngrx/store';
import { RouterStub } from '../../stubs/router.stub';
import { navigationMenu } from '../../mock-data/navigation-menu';

import * as fromRoot from './../../../reducers/app-state.reducer';
import * as fromAuth from './../../../auth/reducers/auth-state.reducer';
import * as fromCore from './../../../core/reducers/core-state.reducer';
import * as fromShared from './../../../shared/reducers/shared-state.reducer';

import { RouterLinkStubDirective } from '../../stubs/routerLink-directive.stub';
import { EndUserOnly, SecurityAdmin, SuperAdmin, ContentAdmin } from '../../mock-data/roles.mocks';
import { navigationMenuTesting } from '../../testing/mock-data/navigation-menu.mock';

fdescribe('[SHARED] [CONTAINER] SIDE-MENU-CONTAINER', () => {
    let component: SideMenuContainer;
    let fixture: ComponentFixture<SideMenuContainer>;
    let sideMenuContainerSetup: SideMenuContainerSetup;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RouterLinkStubDirective, SideMenuContainer],
            imports: [ThirdPartyModule,
                RouterTestingModule,
                StoreModule.forRoot({
                    ...fromRoot.routerReducers,
                    auth: combineReducers(fromAuth.authStateReducer),
                    core: combineReducers(fromCore.coreStateReducer),
                    shared: combineReducers(fromShared.sharedStateReducer)
                })],
            providers: [
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideMenuContainer);
        component = fixture.componentInstance;

        /** Populate With Mock Data */
        component.routes = navigationMenu;

        const body: HTMLElement = fixture.debugElement.nativeElement;

        sideMenuContainerSetup = new SideMenuContainerSetup(fixture, component, body);
        fixture.detectChanges();
    });
    /** Test Cases :
     *  - Populate Correctly By User role => if Permitted Role Has defined in current user role.
     *    - if user not permitted just hide the links.
     *  - Should Populate Correctly Category With Same Hide Logic
     */
    describe('UI Tests', () => {
        /** Only Display Empty Menu and End-user Menu */
        it('should populate anchor correctly by End User user role', () => {

            /** Setting Current user As End User Only */
            component.roles = EndUserOnly;

            /** Populate Mock Menu */
            component.routes = navigationMenuTesting;
            fixture.detectChanges();

            /** Get Controls */
            sideMenuContainerSetup.initControls();

            /** Expect Current User Only Able To See All Menu are empty privilage role, and assign to end-user */
            /** expected length + 1 because has expension panel group */
            expect(sideMenuContainerSetup.anchorsCollectionEl.length).toBe(3);

            expect(sideMenuContainerSetup.firstAnchorEl).toBeDefined();
            expect(sideMenuContainerSetup.firstIconEl.innerHTML).toContain(navigationMenuTesting[0].menuIcon);
            expect(sideMenuContainerSetup.firstTitleEl.innerHTML).toContain(navigationMenuTesting[0].menuTitle);
        });
        /** Display All Admin Menu And Empty Role Menu and Security Menu */
        it('should populate anchor correctly by Security Admin user role', () => {

            /** Setting Current user As End User Only */
            component.roles = SecurityAdmin;

            /** Populate Mock Menu */
            component.routes = navigationMenuTesting;
            fixture.detectChanges();

            /** Get Controls */
            sideMenuContainerSetup.initControls();

            /** Expect Current User Only Able To See All Menu are empty privilage role, and assign to end-user */
            /** expected length + 1 because has expension panel group */
            expect(sideMenuContainerSetup.anchorsCollectionEl.length).toBe(5);

            expect(sideMenuContainerSetup.firstAnchorEl).toBeDefined();
            expect(sideMenuContainerSetup.firstIconEl.innerHTML).toContain(navigationMenuTesting[0].menuIcon);
            expect(sideMenuContainerSetup.firstTitleEl.innerHTML).toContain(navigationMenuTesting[0].menuTitle);
        });
        /** Will Display all Menu If Has Super Admin Role */
        it('should populate anchor correctly by Super Admin user role', () => {

            /** Setting Current user As End User Only */
            component.roles = SuperAdmin;

            /** Populate Mock Menu */
            component.routes = navigationMenuTesting;
            fixture.detectChanges();

            /** Get Controls */
            sideMenuContainerSetup.initControls();

            /** Expect Current User Only Able To See All Menu are empty privilage role, and assign to end-user */
            /** expected length + 1 because has expension panel group */
            expect(sideMenuContainerSetup.anchorsCollectionEl.length).toBe(7);

            expect(sideMenuContainerSetup.firstAnchorEl).toBeDefined();
            expect(sideMenuContainerSetup.firstIconEl.innerHTML).toContain(navigationMenuTesting[0].menuIcon);
            expect(sideMenuContainerSetup.firstTitleEl.innerHTML).toContain(navigationMenuTesting[0].menuTitle);
        });
        /** Display All Admin Menu And Empty Role Menu and Content Menu */
        it('should populate anchor correctly by Content Admin user role', () => {

            /** Setting Current user As End User Only */
            component.roles = ContentAdmin;

            /** Populate Mock Menu */
            component.routes = navigationMenuTesting;
            fixture.detectChanges();

            /** Get Controls */
            sideMenuContainerSetup.initControls();

            /** Expect Current User Only Able To See All Menu are empty privilage role, and assign to end-user */
            /** expected length + 1 because has expension panel group */
            expect(sideMenuContainerSetup.anchorsCollectionEl.length).toBe(5);

            expect(sideMenuContainerSetup.firstAnchorEl).toBeDefined();
            expect(sideMenuContainerSetup.firstIconEl.innerHTML).toContain(navigationMenuTesting[0].menuIcon);
            expect(sideMenuContainerSetup.firstTitleEl.innerHTML).toContain(navigationMenuTesting[0].menuTitle);
        });

        /** Will Populate All Category Correctly */
        it('should populate correctly all category', () => {

        });
    });

});

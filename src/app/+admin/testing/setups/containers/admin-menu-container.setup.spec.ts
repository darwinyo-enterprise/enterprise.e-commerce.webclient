import { IBaseTestingSetup } from '../../../../shared/contracts/testing/ISetup.interface';
import { ComponentFixture } from '@angular/core/testing';
import { AdminMenuContainer } from '../../../containers/admin-menu/admin-menu.container';
import { Router } from '@angular/router';
import { IMenuModel } from '../../../../shared/models/menu/menu.model';
import { adminNavigationMenu } from '../../../../shared/mock-data/admin-navigation-menu';
import { By } from '@angular/platform-browser';

export class AdminMenuContainerSetup implements IBaseTestingSetup {
    /** Material nav list element */
    menuContainerEl: HTMLElement;

    /** Child Elements of Nav List Material Element */
    anchorsCollectionEl: HTMLCollection;

    /** Singular Anchor Element */
    anchorEl: HTMLAnchorElement;

    /** Child Element Of Anchors */
    iconEl: HTMLElement;
    titleEl: HTMLSpanElement;

    mockModel: IMenuModel[];

    constructor(private fixture: ComponentFixture<AdminMenuContainer>,
        private comp: AdminMenuContainer) {
        this.initSpies();

        this.mockModel = adminNavigationMenu;

        /** Making sure App Implements the right mock model for Avoid Brittle test */
        this.comp.adminMenu = this.mockModel;
    }
    initControls(): void {
        this.menuContainerEl = this.fixture.debugElement.query(By.css('mat-nav-list')).nativeElement;
        this.anchorsCollectionEl = this.menuContainerEl.children;
    }
    initSpies(): void {
    }
    cleanControls(): void {
        this.comp = null;
        this.fixture = null;
        this.mockModel = null;
    }
    go_to_nthAnchor_Child(nth: number) {
        this.anchorEl = <HTMLAnchorElement>this.anchorsCollectionEl.item(nth);
        this.iconEl = <HTMLElement>this.anchorsCollectionEl.item(nth).children.item(1);
        this.titleEl = <HTMLElement>this.anchorsCollectionEl.item(nth).children.item(2);
    }
}

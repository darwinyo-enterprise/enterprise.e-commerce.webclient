import { IBaseTestingSetup } from '../../../contracts/testing/ISetup.interface';
import { ComponentFixture } from '@angular/core/testing';
import { SideMenuContainer } from '../../../containers/side-menu/side-menu.container';
import { IMenuModel } from '../../../models/menu/menu.model';
import { By } from '@angular/platform-browser';

export class SideMenuContainerSetup implements IBaseTestingSetup {
    /** Material nav list element */
    menuContainerEl: HTMLElement;

    /** Child Elements of Nav List Material Element */
    anchorsCollectionEl: HTMLCollection;

    /** Singular Anchor Element */
    firstAnchorEl: HTMLAnchorElement;
    expansionPanelGroup: HTMLElement;

    /** Child Element Of Anchors */
    firstIconEl: HTMLElement;
    firstTitleEl: HTMLSpanElement;

    mockModel: IMenuModel[];

    constructor(
        private fixture: ComponentFixture<SideMenuContainer>,
        private comp: SideMenuContainer,
        private body: HTMLElement
    ) {
        this.initSpies();
    }

    initControls(): void {
        /** Get mat nav list */
        this.menuContainerEl = <HTMLElement>this.body.children.item(0);

        /** Get Td Expansion Panel Group */
        this.expansionPanelGroup = <HTMLElement>this.menuContainerEl.lastChild;

        /** has Expension panel group */
        this.anchorsCollectionEl = this.menuContainerEl.children;

        this.firstAnchorEl = <HTMLAnchorElement>this.anchorsCollectionEl.item(0);

        this.firstIconEl = <HTMLElement>this.firstAnchorEl.children.item(0).children.item(1);
        this.firstTitleEl = <HTMLElement>this.firstAnchorEl.children.item(0).children.item(3);

    }
    initSpies(): void {

    }
    cleanControls(): void {

    }
}

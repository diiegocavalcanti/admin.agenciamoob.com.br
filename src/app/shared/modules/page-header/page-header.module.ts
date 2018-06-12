import { DropdownComponent } from './../../../layout/bs-component/components/dropdown/dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageHeaderComponent } from './page-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        CommonModule,
        RouterModule],
    declarations: [
        PageHeaderComponent,
        DropdownComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule { }

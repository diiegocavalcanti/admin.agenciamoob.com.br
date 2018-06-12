import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    templateUrl: './edit-form.component.html',
    animations: [routerTransition()]
})
export class EditFormComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

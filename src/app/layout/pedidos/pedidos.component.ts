import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    templateUrl: './pedidos.component.html',
    animations: [routerTransition()]
})
export class PedidosComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

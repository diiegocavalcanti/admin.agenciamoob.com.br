import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { EditFormComponent } from './Edit-Form/edit-form.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PageHeaderModule,
        PedidosRoutingModule],
    declarations: [PedidosComponent, EditFormComponent]
})
export class PedidosModule {}

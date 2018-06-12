import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos.component';
import { EditFormComponent } from './Edit-Form/edit-form.component';

const routes: Routes = [
    {
        path: '',
        component: PedidosComponent
    },
    {
        path: ':id',
        component: EditFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidosRoutingModule {}

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "customers", loadComponent: () => import('./customers/customers.component')
             .then(m => m.CustomersComponent)
    },
    {
        path: "orders", loadComponent: () => import('./orders/orders.component')
                 .then(m => m.OrdersComponent)
    },
    {
        path: "", redirectTo: "/customers", pathMatch: "full"
    },
    {
        path: "**", loadComponent: () => import('./not-found/not-found.component')
           .then(c => c.NotFoundComponent )
    }
];

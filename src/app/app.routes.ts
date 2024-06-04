import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'weather',
        loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES)
    },
];
